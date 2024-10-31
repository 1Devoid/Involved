//Function for testing error states
function addErrorClassToElements() {
  const elements = document.querySelectorAll(
    '.error-input ~ .group[data-te-input-notch-ref]'
  );

  if (elements.length > 0) {
    elements.forEach((element) => {
      element.classList.add('error'); // Додаємо клас error
    });
  }
}

export default addErrorClassToElements;
