document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav_menu-switch[data-toggle], .nav_lang-switch[data-toggle]').forEach(function (item) {
    var isDetails = item.tagName === 'DETAILS';
    var group = item.getAttribute('name') || item.dataset.toggleGroup;
    if (group) {
      item.dataset.group = group;
      item.removeAttribute('name');
    }
    item._toggleDetails = isDetails;

    item.children[0].addEventListener('click', function (e) {
      e.preventDefault();
      var opening = !item.classList.contains('is-open');
      if (opening) {
        document.querySelectorAll('[data-group="' + item.dataset.group + '"].is-open').forEach(function (other) {
          if (other !== item) setOpen(other, false);
        });
      }
      setOpen(item, opening);
    });
  });

  function setOpen(item, opening) {
    var content = item.children[1];
    var isDetails = item._toggleDetails;

    item.classList.toggle('is-open', opening);
    item.classList.add('is-animating');
    if (!isDetails && opening) content.style.visibility = 'visible';

    var running = content.getAnimations();
    var from = running.length ? content.getBoundingClientRect().height : (opening ? 0 : content.getBoundingClientRect().height);
    running.forEach(function (a) { a.cancel(); });

    if (isDetails && opening) item.open = true;

    var to = 0;
    if (opening) {
      var prevHeight = content.style.height;
      content.style.height = 'auto';
      to = content.getBoundingClientRect().height;
      content.style.height = prevHeight;
    }

    var anim = content.animate(
      [{ height: from + 'px' }, { height: to + 'px' }],
      { duration: 400, easing: 'ease-in-out', fill: 'forwards' }
    );
    anim.onfinish = function () {
      if (isDetails) {
        if (!opening) item.open = false;
      } else {
        content.style.height = opening ? 'auto' : '0px';
        content.style.visibility = opening ? 'visible' : 'hidden';
      }
      item.classList.remove('is-animating');
      anim.cancel();
    };
  }

  document.querySelectorAll('.lang-hbar').forEach(function (bar) {
    var toggle = bar.querySelector('.lang-hbar_toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var opening = !bar.classList.contains('is-open');
      bar.classList.toggle('is-open', opening);
      toggle.setAttribute('aria-expanded', opening ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (bar.classList.contains('is-open') && !bar.contains(e.target)) {
        bar.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
