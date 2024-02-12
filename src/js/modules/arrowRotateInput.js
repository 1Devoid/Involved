function arrowRotateInput() {
  const ddAnimationBtn = document.querySelectorAll('.dd-animation');
  if (ddAnimationBtn) {
    ddAnimationBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        btn.classList.toggle('dd-animation-rotate');
      });
    });
  }
}

export default arrowRotateInput;

// if (
//   e.target !== headerBurgerMenu &&
//   e.target !== headerBurger &&
//   e.target !== labelBurger
// ) {
//   headerBurger.checked = false;
// }
