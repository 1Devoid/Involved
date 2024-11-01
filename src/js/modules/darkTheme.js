function darkThemeToggler() {
  const darkTogglerBtn = document.getElementById('darkToggler');
  const body = document.querySelector('.body');

  if (sessionStorage.getItem('darkTheme') === 'enabled') {
    body.classList.add('dark');
  }

  darkTogglerBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      sessionStorage.setItem('darkTheme', 'enabled');
    } else {
      sessionStorage.setItem('darkTheme', 'disabled');
    }
  });
}

export default darkThemeToggler;
