// Stránky design systemu mají pevnou šířku (1440 px, mobil 390 px).
// Na užší obrazovce se plocha zmenší, aby se vešla celá; na širší zůstává 1:1.
(function () {
  var board = document.querySelector('.sg-board');
  if (!board) return;
  var width = +board.getAttribute('data-width');
  function fit() {
    var avail = document.documentElement.clientWidth - 32;
    board.style.zoom = avail < width ? (avail / width).toFixed(4) : '';
  }
  fit();
  window.addEventListener('resize', fit);
})();
