// Mobilní hamburger menu — otevře/zavře panel s odkazy a synchronizuje aria stav.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });

  // Zavřít po kliknutí na odkaz nebo klávesou Esc.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
