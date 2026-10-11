/*
 * Захват меток атрибуции на лендинге karta.io + проброс их в мини-апп.
 *
 * ЗАЧЕМ. Единственный канал из веба в Telegram-мини-апп — параметр `startapp`,
 * а он принимает только [A-Za-z0-9_-] и максимум 512 символов. Раньше туда клали
 * всё подряд, метки ломались об этот алфавит, и бэкенд пытался их восстановить.
 * Здесь другой подход: несём только то, что нужно, и в кодировке, которая
 * гарантированно проходит.
 *
 * ФОРМАТ `startapp` — существующий, менять парсер на бэкенде НЕ нужно:
 *
 *   ajs_aid__<uuid>___ga_client_id__<client_id>
 *
 *   Пары `ключ__значение`, между парами `___`. Ровно так уже приходят
 *   `utm_source__referral___click_id__...___referral_campaign_id__...`.
 *   Старый вид `ajs_aid__<uuid>` — частный случай с одной парой.
 *
 *   ТОЧКА. Telegram пропускает в startapp только [A-Za-z0-9_-] и молча вырезает
 *   остальное, поэтому в проде видны покалеченные значения вида
 *   `g_user__11873683971780653735` (было `1187368397.1780653735`) и
 *   `fbc__fb11781246203560PAZ...` (было `fb.1.1781246203560.PAZ...`).
 *   Чтобы не повторять это, точку в ga_client_id заменяем на дефис — он разрешён
 *   и доедет как есть. Обратно в точку значение приводит воркер (normalize_client_id),
 *   бэкенду ничего декодировать не надо.
 *
 * ЧТО ИЗМЕНИЛОСЬ против прежней версии:
 *  1. captureTraits больше не одноразовый. Раньше `traitsSent` закрывал дверь на
 *     первом же вызове (обычно DOMContentLoaded), а к этому моменту gtag ещё не
 *     успевал записать куку _ga — и ga_client_id терялся у всех новых посетителей.
 *  2. client_id и session_id спрашиваем у самого gtag через `gtag('get', ...)`.
 *     Коллбэк срабатывает, когда GA готов, — гонки нет. Разбор куки остался запасным.
 *  3. Ссылки CTA переписываются заново каждый раз, когда приезжает новая метка,
 *     и ещё раз в момент клика — последний шанс до ухода в Telegram.
 */
(function () {
  var CTA = 'a[href*="karta/app"], [data-track="cta"]';
  var SEP = '__';         // ключ от значения
  var PAIR_SEP = '___';   // пара от пары
  var AID = 'ajs_aid';
  var TG_SAFE = /^[A-Za-z0-9_-]+$/;  // всё, что Telegram пропускает в startapp
  var MEASUREMENT_ID = 'G-DJK1E9SN6C';
  var STARTAPP_MAX = 512;
  var GA_POLL_MS = 500;
  var GA_POLL_TRIES = 20; // 10 секунд

  var sent = {}; // что уже ушло в identify, чтобы не слать одно и то же дважды

  function qs(n) {
    return new URLSearchParams(location.search).get(n);
  }
  function cookie(n) {
    var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + n + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function firstTouch(k, v) {
    try {
      var s = JSON.parse(localStorage.getItem('karta_attr') || '{}');
      if (v && !s[k]) {
        s[k] = v;
        localStorage.setItem('karta_attr', JSON.stringify(s));
      }
      return s[k] || v || null;
    } catch (e) {
      return v || null;
    }
  }
  function anonId() {
    try {
      var u = window.analytics && analytics.user && analytics.user();
      var id = u && u.anonymousId && u.anonymousId();
      if (id) return id;
    } catch (e) {}
    var c = cookie('ajs_anonymous_id');
    if (c) {
      try {
        return JSON.parse(c);
      } catch (_) {
        return c;
      }
    }
    try {
      var ls = localStorage.getItem('ajs_anonymous_id');
      if (ls) {
        try {
          return JSON.parse(ls);
        } catch (_) {
          return ls;
        }
      }
    } catch (e) {}
    return null;
  }

  // Шлём только то, что изменилось. identify можно вызывать многократно —
  // Segment домержит traits к тому же анонимному профилю.
  function pushTraits(t) {
    var delta = {};
    Object.keys(t).forEach(function (k) {
      if (t[k] && sent[k] !== t[k]) {
        delta[k] = t[k];
        sent[k] = t[k];
      }
    });
    if (!Object.keys(delta).length) return;
    window.__kartaAttr = Object.assign(window.__kartaAttr || {}, delta);
    try {
      if (window.analytics && analytics.identify) analytics.identify(delta);
    } catch (_) {}
    // Приехала новая метка — пересобираем ссылки, чтобы она попала в startapp.
    arm();
  }

  // Метки из URL и куки Meta — доступны сразу.
  function captureInstant() {
    var t = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      var v = firstTouch(k, qs(k));
      if (v) t[k] = v;
    });
    var gclid = firstTouch('gclid', qs('gclid'));
    if (gclid) t.gclid = gclid;
    // gbraid/wbraid Google отдаёт вместо gclid в app- и iOS-кампаниях.
    var gbraid = firstTouch('gbraid', qs('gbraid'));
    if (gbraid) t.gbraid = gbraid;
    var wbraid = firstTouch('wbraid', qs('wbraid'));
    if (wbraid) t.wbraid = wbraid;
    var fbclid = firstTouch('fbclid', qs('fbclid'));
    if (fbclid) t.fbclid = fbclid;
    var clickId = firstTouch('click_id', qs('click_id'));
    if (clickId) t.click_id = clickId;

    var fbp = cookie('_fbp');
    if (fbp) t.fbp = fbp;
    var fbc = cookie('_fbc');
    if (!fbc && qs('fbclid')) fbc = 'fb.1.' + Date.now() + '.' + qs('fbclid');
    if (fbc) t.fbc = fbc;

    pushTraits(t);
  }

  // Метки GA — появляются только после инициализации gtag.
  function captureGaFromCookies() {
    var t = {};
    var ga = cookie('_ga');
    if (ga) t.ga_client_id = ga.split('.').slice(-2).join('.');
    var sessionCookie = (document.cookie.match(/_ga_[A-Z0-9]+/) || [])[0];
    if (sessionCookie) {
      var m = (cookie(sessionCookie) || '').match(/^GS\d\.\d+\.s?(\d+)/);
      if (m) t.ga_session_id = m[1];
    }
    pushTraits(t);
    return !!t.ga_client_id;
  }

  function captureGa() {
    if (sent.ga_client_id) return;
    if (captureGaFromCookies()) return;

    // Спрашиваем напрямую: коллбэк отработает, когда GA будет готов.
    if (typeof window.gtag === 'function') {
      try {
        gtag('get', MEASUREMENT_ID, 'client_id', function (id) {
          if (id) pushTraits({ ga_client_id: String(id) });
        });
        gtag('get', MEASUREMENT_ID, 'session_id', function (id) {
          if (id) pushTraits({ ga_session_id: String(id) });
        });
      } catch (_) {}
    }

    // Подстраховка на случай, если gtag на странице нет или он отвечает не сразу.
    var tries = 0;
    var timer = setInterval(function () {
      if (sent.ga_client_id || captureGaFromCookies() || ++tries >= GA_POLL_TRIES) {
        clearInterval(timer);
      }
    }, GA_POLL_MS);
  }

  function capture() {
    captureInstant();
    captureGa();
  }

  function startappHref(href) {
    var clean = href.split('?')[0];
    var aid = anonId();
    if (!aid) return clean;

    // Идентификатор — первым: без него бесполезно всё остальное.
    var value = AID + SEP + aid;

    var clientId = (window.__kartaAttr || {}).ga_client_id;
    if (clientId) {
      // Точку Telegram вырежет молча, дефис пропустит. Воркер вернёт точку обратно.
      var safe = String(clientId).replace(/\./g, '-');
      var candidate = value + PAIR_SEP + 'ga_client_id' + SEP + safe;
      if (candidate.length <= STARTAPP_MAX && TG_SAFE.test(candidate)) value = candidate;
    }
    return clean + '?startapp=' + value;
  }

  function updateLinks() {
    document.querySelectorAll(CTA).forEach(function (el) {
      var link = (el.closest && el.closest('a')) || el;
      if (link.tagName === 'A' && link.href) link.href = startappHref(link.href);
    });
  }

  document.addEventListener(
    'click',
    function (e) {
      var el = e.target.closest && e.target.closest(CTA);
      if (!el) return;
      var link = (el.closest && el.closest('a')) || el;
      // Последний шанс подобрать метку до ухода в Telegram.
      captureInstant();
      captureGaFromCookies();
      try {
        analytics.track('CTA Clicked', {
          button_text: (el.textContent || '').trim(),
          page: location.pathname,
        });
      } catch (_) {}
      if (link.tagName === 'A' && link.href) link.href = startappHref(link.href);
    },
    true,
  );

  function arm() {
    try {
      updateLinks();
    } catch (e) {}
  }
  if (window.analytics && analytics.ready) {
    analytics.ready(function () {
      capture();
      arm();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      capture();
      arm();
    });
  } else {
    capture();
    arm();
  }
  window.addEventListener('load', function () {
    capture();
    arm();
  });
  setTimeout(arm, 1500);
})();
