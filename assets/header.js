// the header shrinks to the mark once the page is scrolled
(function () {
  var h = document.querySelector(".site-header");
  if (!h) return;
  var on = false;
  function update() {
    var y = window.scrollY || document.documentElement.scrollTop;
    var c = on ? y > 24 : y > 64;  // hysteresis: no flicker at the threshold
    if (c !== on) { on = c; h.classList.toggle("compact", on); }
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
