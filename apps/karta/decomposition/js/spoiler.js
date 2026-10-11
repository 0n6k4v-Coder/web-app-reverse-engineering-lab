document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.spoiler_item[data-toggle]').forEach(function (item) {
    var group = item.getAttribute('name') || item.dataset.toggleGroup;
    if (group) {
      item.dataset.group = group;
      item.removeAttribute('name');
    }

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

    item.classList.toggle('is-open', opening);
    item.classList.add('is-animating');

    var running = content.getAnimations();
    var from = running.length ? content.getBoundingClientRect().height : (opening ? 0 : content.getBoundingClientRect().height);
    running.forEach(function (a) { a.cancel(); });

    if (opening) item.open = true;

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
      if (!opening) item.open = false;
      item.classList.remove('is-animating');
      anim.cancel();
    };
  }
});
