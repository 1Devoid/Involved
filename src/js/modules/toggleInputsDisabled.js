function toggleInputsDisabled() {
  const passwordRadio = document.getElementById('password-radio-1');
  const passwordRadio2 = document.getElementById('password-radio-2');
  const passwordInput = document.getElementById('create-user-password');
  const confirmPasswordInput = document.getElementById(
    'create-user-confirm-password'
  );

  if (passwordRadio) {
    passwordRadio.addEventListener('click', () => {
      if (passwordRadio.checked) {
        passwordInput.disabled = true;
        confirmPasswordInput.disabled = true;
      }
    });

    passwordRadio2.addEventListener('click', () => {
      if (passwordRadio2.checked) {
        passwordInput.disabled = false;
        confirmPasswordInput.disabled = false;
      }
    });
  }
}

export default toggleInputsDisabled;
