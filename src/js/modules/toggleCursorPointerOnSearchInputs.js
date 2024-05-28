function toggleCursorPointerOnSearchInputs() {
  const searchInputs = document.querySelectorAll('input[type="search"]');

  searchInputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.classList.add('cursor-pointer');
      } else {
        input.classList.remove('cursor-pointer');
      }
    });
  });
}

export default toggleCursorPointerOnSearchInputs;
