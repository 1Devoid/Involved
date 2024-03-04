function asideNavToggler() {
  const asideNavBtn = document.getElementById('sidebarToggler');
  const asideNav = document.querySelector('.aside-nav');
  const main = document.querySelector('.main');

  if (localStorage.getItem('isAsideExpanded') === 'true') {
    asideNav.classList.add('expand');
    main.classList.add('expand');
  }
  asideNavBtn.addEventListener('click', () => {
    if (asideNav.classList.contains('expand')) {
      localStorage.setItem('isAsideExpanded', 'false');
      asideNav.classList.remove('expand');
      main.classList.remove('expand');
    } else {
      localStorage.setItem('isAsideExpanded', 'true');
      asideNav.classList.add('expand');
      main.classList.add('expand');
    }
  });
}

export default asideNavToggler;
