function checkInputsAndToggleButton(buttonId, inputClass) {
  const button = document.getElementById(buttonId);
  if (!button) return; // Якщо кнопка не знайдена, припиняємо виконання

  const inputs = document.querySelectorAll(`.${inputClass}`);

  function updateButtonState() {
    // Перевіряємо, чи всі інпути заповнені
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ''
    );

    if (allFilled) {
      button.removeAttribute('disabled');
      button.classList.remove('opacity-70');
    } else {
      button.setAttribute('disabled', 'true');
      button.classList.add('opacity-70');
    }
  }

  // Додаємо слухач подій для кожного інпуту
  inputs.forEach((input) => {
    input.addEventListener('input', updateButtonState);
  });

  // Виконуємо перевірку при завантаженні сторінки
  updateButtonState();
}

export default checkInputsAndToggleButton;
