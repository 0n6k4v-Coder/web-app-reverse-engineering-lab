document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeElements = document.querySelectorAll('.s5_time');
    timeElements.forEach(el => el.textContent = timeString);
  }
  function schedule() {
    updateTime();
    setInterval(updateTime, 10000);
  }
  if (window.requestIdleCallback) {
    requestIdleCallback(schedule, { timeout: 2000 });
  } else {
    setTimeout(schedule, 0);
  }
});
