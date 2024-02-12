function arrowRotateInput(triggerSelector, dropdownSelector) {
  const ddAnimationBtn = document.querySelector(triggerSelector);

  if (ddAnimationBtn) {
    ddAnimationBtn.addEventListener('click', () => {
      ddAnimationBtn.classList.toggle('dd-animation-rotate');
    });

    document.addEventListener('click', (e) => {
      e.stopPropagation();

      if (e.target !== ddAnimationBtn && !e.target.closest(dropdownSelector)) {
        ddAnimationBtn.classList.remove('dd-animation-rotate');
      }
    });
  }
}

export default arrowRotateInput;
