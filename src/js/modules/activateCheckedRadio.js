function activateCheckedRadio() {
  const radios = document.querySelectorAll(
    'input[name="persona-plate-checkbox"][type="radio"]'
  );

  radios.forEach((radio) => {
    if (radio.checked) {
      const parentBlock = radio.closest('.persona-plate-block');
      if (parentBlock) {
        parentBlock.classList.add('active');
      }
    } else {
      const parentBlock = radio.closest('.persona-plate-block');
      if (parentBlock) {
        parentBlock.classList.remove('active');
      }
    }
  });

  document.addEventListener('DOMContentLoaded', activateCheckedRadio);
  document
    .querySelectorAll('input[name="persona-plate-checkbox"][type="radio"]')
    .forEach((radio) => {
      radio.addEventListener('change', activateCheckedRadio);
    });

  const radiosList = document.querySelectorAll(
    'input[name="persona-list-checkbox"][type="radio"]'
  );

  radiosList.forEach((radio) => {
    if (radiosList.checked) {
      const parentBlockList = radio.closest('.persona-list-block');
      if (parentBlockList) {
        parentBlockList.classList.add('active');
      }
    } else {
      const parentBlockList = radio.closest('.persona-list-block');
      if (parentBlockList) {
        parentBlockList.classList.remove('active');
      }
    }
  });

  document.addEventListener('DOMContentLoaded', activateCheckedRadio);
  document
    .querySelectorAll('input[name="persona-list-checkbox"][type="radio"]')
    .forEach((radio) => {
      radio.addEventListener('change', activateCheckedRadio);
    });
}

function activateCheckedRadioList() {
  const radiosList = document.querySelectorAll(
    'input[name="persona-list-checkbox"][type="radio"]'
  );

  radiosList.forEach((radio) => {
    if (radio.checked) {
      const parentBlockList = radio.closest('.persona-list-block');
      if (parentBlockList) {
        parentBlockList.classList.add('active');
      }
    } else {
      const parentBlockList = radio.closest('.persona-list-block');
      if (parentBlockList) {
        parentBlockList.classList.remove('active');
      }
    }
  });

  document.addEventListener('DOMContentLoaded', activateCheckedRadioList);
  document
    .querySelectorAll('input[name="persona-list-checkbox"][type="radio"]')
    .forEach((radio) => {
      radio.addEventListener('change', activateCheckedRadioList);
    });
}

export { activateCheckedRadio, activateCheckedRadioList };
