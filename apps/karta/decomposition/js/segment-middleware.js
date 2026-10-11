// Source Middleware (Segment official API)
// Docs: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/middleware/
analytics.addSourceMiddleware(function (chain) {
  var payload = chain.payload;
  // platform: отличаем события лендинга от TMA в Mixpanel
  if (payload.obj.properties) payload.obj.properties.platform = 'landing';
  if (payload.obj.traits) payload.obj.traits.platform = 'landing';
  if (payload.obj.context) payload.obj.context.platform = 'landing';
  // UTM: прокидываем метки во ВСЕ события
  // По умолчанию Segment ставит UTM только на первый Page, остальные события их не получают
  var params = new URLSearchParams(window.location.search);
  var utmSource = params.get('utm_source');
  if (utmSource && payload.obj.properties) {
    payload.obj.properties.utm_source = params.get('utm_source');
    payload.obj.properties.utm_medium = params.get('utm_medium');
    payload.obj.properties.utm_campaign = params.get('utm_campaign');
    payload.obj.properties.utm_term = params.get('utm_term');
    payload.obj.properties.utm_content = params.get('utm_content');
  }
  // Рекламные идентификаторы в properties КАЖДОГО события (не только в traits)
  var ad = window.__kartaAttr || {};
  if (payload.obj.properties) {
    ['fbp', 'fbc', 'fbclid', 'ga_client_id', 'ga_session_id', 'gclid', 'click_id'].forEach(function (k) {
      if (ad[k] != null && ad[k] !== '') payload.obj.properties[k] = ad[k];
    });
  }
  chain.next(payload);
});