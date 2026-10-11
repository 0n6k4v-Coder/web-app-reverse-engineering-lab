(function () {
  function init() {
    var atm = document.querySelector('.atm');
    if (!atm) return;

    var frameLast = document.querySelector('.atm_frame-last');
    var isPast = null;

    function setTransition(active) {
      document.body.classList.add('theme-transition');
      if (active) {
        document.documentElement.classList.add('u-theme-brand');
      } else {
        document.documentElement.classList.remove('u-theme-brand');
      }
      if (frameLast) frameLast.style.opacity = active ? '1' : '0';
      setTimeout(function () {
        document.body.classList.remove('theme-transition');
      }, 600);
    }

    function check() {
      var past = atm.getBoundingClientRect().top <= window.innerHeight * 0.3;
      if (past === isPast) return;
      isPast = past;
      setTransition(past);
    }

    isPast = atm.getBoundingClientRect().top <= window.innerHeight * 0.3;
    document.documentElement.classList.toggle('u-theme-brand', isPast);
    if (frameLast) frameLast.style.opacity = isPast ? '1' : '0';

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
  }

  function run() {
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
