document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.nav__button');
  const sideBar = document.querySelector('.nav__list');
  const menuIcon =  document.querySelector('.nav__icon');
  const navLinkItems = document.querySelectorAll('.nav__link');

  if (window.innerWidth <= 1400) {
    navLinkItems.forEach((navLink) => {
      navLink.setAttribute('tabindex', -1);
    })
  }

  menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('nav-sidebar');
    menuIcon.classList.toggle('nav__button_open')
    let expanded = menuBtn.getAttribute('aria-expanded') == 'true';
    if (expanded) {
      navLinkItems.forEach((navLink) => {
        navLink.setAttribute('tabindex', -1);
      })
    } else {
      navLinkItems.forEach((navLink) => {
        navLink.setAttribute('tabindex', 0);
      })
    }
    menuBtn.setAttribute('aria-expanded', !expanded);
  });
})


