function arrowRotateInput() {
  const ddAnimationBtn = document.querySelectorAll('.dd-animation');
  if (ddAnimationBtn) {
    ddAnimationBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('dd-animation-rotate');
      });
    });
  }
}

export default arrowRotateInput;
