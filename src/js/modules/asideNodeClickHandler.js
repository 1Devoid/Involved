function asideNodeClickHandler() {
  function handleAsideNodeClick(event) {
    const button = event.currentTarget;
    const svg = button.querySelector('svg');
    if (!svg) return;

    const otherButtons = document.querySelectorAll(
      '.aside-node:not(.svg-rotate)'
    );
    otherButtons.forEach((otherButton) => {
      const otherSvg = otherButton.querySelector('svg');
      if (otherSvg) {
        otherSvg.classList.remove('-rotate-90');
      }
      otherButton.classList.remove('svg-rotate');
    });

    if (!button.classList.contains('svg-rotate')) {
      svg.classList.add('-rotate-90');
      button.classList.add('svg-rotate');
    } else {
      svg.classList.remove('-rotate-90');
      button.classList.remove('svg-rotate');
    }
  }

  const buttons = document.querySelectorAll('.aside-node');
  buttons.forEach((button) => {
    button.addEventListener('click', handleAsideNodeClick);
  });
}

export default asideNodeClickHandler;
