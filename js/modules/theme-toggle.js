document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-change');
  const htmlElement = document.documentElement;
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isGoingToDark = !htmlElement.classList.contains('u-theme-dark');
      document.body.classList.add('theme-transition');
      document.body.offsetHeight;
      htmlElement.classList.toggle('u-theme-dark', isGoingToDark);
      localStorage.setItem('theme', isGoingToDark ? 'dark' : 'light');
      setTimeout(() => document.body.classList.remove('theme-transition'), 600);
    });
  }
});