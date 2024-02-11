function darkThemeToggler() {
  const darkTogglerBtn = document.getElementById('darkToggler');
  const body = document.querySelector('.body');

  darkTogglerBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
}

export default darkThemeToggler;
