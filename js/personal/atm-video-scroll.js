(function () {
  // Конфигурация
  const CONFIG = {
    containerSelector: '.atm',
    videoSelector: '.atm_video video',
    startVpThreshold: 0.6,
    durationInVH: 0.9,
  };

  const video = document.querySelector(CONFIG.videoSelector);
  const section = document.querySelector(CONFIG.containerSelector);
  if (!video || !section) return;

  video.pause();

  let startY = 0;
  let endY = 0;
  let ready = false;
  let scrollTicking = false;

  // Очередь сика видео
  const SEEK_EPSILON = 0.008;
  let targetTime = 0;
  let seekPending = false;
  let seekWatchdog = null;

  function startSeek() {
    seekPending = true;
    video.currentTime = targetTime;
    clearTimeout(seekWatchdog);
    seekWatchdog = setTimeout(finishSeek, 200);
  }

  function finishSeek() {
    clearTimeout(seekWatchdog);
    seekPending = false;
    if (Math.abs(video.currentTime - targetTime) > SEEK_EPSILON) {
      startSeek();
    }
  }

  function requestSeek(time) {
    targetTime = time;
    if (seekPending) return;
    if (Math.abs(video.currentTime - targetTime) < SEEK_EPSILON) return;
    startSeek();
  }

  video.addEventListener('seeked', finishSeek);

  // Расчёт диапазона скролла
  function recalculateRange() {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    startY = sectionTop - window.innerHeight * CONFIG.startVpThreshold;
    endY = startY + window.innerHeight * CONFIG.durationInVH;
  }

  // Применение прогресса скролла
  function applyScrollProgress() {
    scrollTicking = false;
    if (!ready || !video.duration) return;

    const span = endY - startY;
    const progress = span > 0
      ? Math.min(1, Math.max(0, (window.scrollY - startY) / span))
      : 0;

    const time = Math.min(video.duration - 0.02, progress * video.duration);
    requestSeek(Math.max(0, time));
  }

  // Обработчики скролла и ресайза
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(applyScrollProgress);
  }

  function onResize() {
    recalculateRange();
    onScroll();
  }

  // Готовность метаданных
  function onMetadataReady() {
    ready = true;
    recalculateRange();
    applyScrollProgress();
  }

  function waitForMetadata() {
    if (video.readyState >= 1) {
      onMetadataReady();
    } else {
      video.addEventListener('loadedmetadata', onMetadataReady, { once: true });
    }
  }

  // Предзагрузка видео блобом
  const sourceEl = video.querySelector('source');
  const videoUrl = (sourceEl && sourceEl.src) || video.currentSrc;

  if (videoUrl) {
    fetch(videoUrl)
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error('bad status'))))
      .then((blob) => {
        video.src = URL.createObjectURL(blob);
        video.load();
        waitForMetadata();
      })
      .catch(waitForMetadata);
  } else {
    waitForMetadata();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('load', onResize);
})();
