(function () {
  document.querySelectorAll('.slider').forEach((slider) => {
    const mask = slider.querySelector('[mask]');
    const slides = mask.children;
    const nav = slider.querySelector('.slide-nav');
    const total = slides.length;
    const duration = parseInt(slider.getAttribute('data-duration') ?? 500);
    let current = 0;
    function isRTL() {
      return getComputedStyle(slider).direction === 'rtl';
    }
    function step() {
      const s = slides[0], st = window.getComputedStyle(s);
      const margin = isRTL() ? parseFloat(st.marginLeft) : parseFloat(st.marginRight);
      return s.offsetWidth + margin;
    }
    function goTo(i) {
      const dotCount = nav.querySelectorAll('.slider-dot').length;
      current = ((i % dotCount) + dotCount) % dotCount;
      const offset = isRTL() ? step() * current : -step() * current;
      mask.style.transition = `transform ${duration}ms ease`;
      mask.style.transform = `translateX(${offset}px)`;
      nav.querySelectorAll('.slider-dot').forEach((d, j) => d.classList.toggle('active', j === current));
    }
    function buildDots() {
      const st = window.getComputedStyle(slides[0]);
      const margin = isRTL() ? parseFloat(st.marginLeft) : parseFloat(st.marginRight);
      const hidden = Math.max(0, Math.ceil((step() * total - slider.offsetWidth - margin) / step()));
      current = Math.min(current, hidden);
      nav.innerHTML = '';
      nav.style.display = hidden > 0 ? 'flex' : 'none';
      for (let i = 0; i <= hidden; i++) {
        const d = document.createElement('div');
        d.className = 'slider-dot' + (i === current ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        nav.appendChild(d);
      }
    }
    new ResizeObserver(() => {
      buildDots();
      mask.style.transition = 'none';
      const offset = isRTL() ? step() * current : -step() * current;
      mask.style.transform = `translateX(${offset}px)`;
    }).observe(mask);
    // Свайп
    let x0 = null, y0 = null, locked = null;
    slider.addEventListener('touchstart', (e) => {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
      locked = null;
    }, { passive: true });
    slider.addEventListener('touchmove', (e) => {
      if (x0 === null) return;
      const dx = e.touches[0].clientX - x0;
      const dy = e.touches[0].clientY - y0;
      if (locked === null) locked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
      if (locked === 'h') e.preventDefault();
    }, { passive: false });
    slider.addEventListener('touchend', (e) => {
      if (x0 === null || locked !== 'h') { x0 = null; return; }
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 30) {
        const dir = isRTL() ? (dx > 0 ? 1 : -1) : (dx < 0 ? 1 : -1);
        goTo(current + dir);
      }
      x0 = null;
    });
  });
})();