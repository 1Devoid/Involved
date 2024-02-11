function asideNavToggler() {
  const asideNavBtn = document.getElementById('sidebarToggler');
  const asideNav = document.querySelector('.aside-nav');
  const main = document.querySelector('.main');

  asideNavBtn.addEventListener('click', () => {
    asideNav.classList.toggle('expand');
    main.classList.toggle('expand');
  });
}

export default asideNavToggler;
