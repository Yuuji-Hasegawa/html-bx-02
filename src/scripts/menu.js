export const menu = () => {
  let btns = document.querySelectorAll('.o-box--menu-btn');
  let btn = Array.prototype.slice.call(btns, 0);
  let cover = document.querySelector('.c-sidebar-bg');
  let sidebar = document.querySelector('.c-sidebar');
  function init() {
    if (sidebar.getAttribute("tabindex") != "-1") {
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('is-open');
        btns[i].setAttribute('aria-expanded', 'false');
        btns[i].setAttribute('aria-label', 'menu open');
      }
      document.body.classList.remove("is-fixed");
      sidebar.classList.remove('c-sidebar--is-open');
      sidebar.setAttribute("tabindex", "-1");
      sidebar.setAttribute("aria-hidden", "true");
      btn.blur();
    }
  }
  function check() {
    if (sidebar.getAttribute("tabindex") == "-1") {
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.add('is-open');
        btns[i].setAttribute('aria-expanded', 'true');
        btns[i].setAttribute('aria-label', 'menu close');
      }
      document.body.classList.add("is-fixed");
      sidebar.classList.add('c-sidebar--is-open');
      sidebar.setAttribute("tabindex", "");
      sidebar.setAttribute("aria-hidden", "false");
    } else {
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('is-open');
        btns[i].setAttribute('aria-expanded', 'false');
        btns[i].setAttribute('aria-label', 'menu open');
      }
      document.body.classList.remove("is-fixed");
      sidebar.classList.remove('c-sidebar--is-open');
      sidebar.setAttribute("tabindex", "-1");
      sidebar.setAttribute("aria-hidden", "true");
      btn.blur();
    }
  }
  btn.forEach((target) => {
    target.addEventListener('click', () => {
      check();
      console.log(target);
    });
  });
  cover.addEventListener('click', () => {
    check();
  });
  window.addEventListener("resize", () => {
    init();
  });
}
