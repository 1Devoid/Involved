function showPassword(password, passwordBtn) {
  const passwordInput = document.querySelector(password);

  if (passwordInput) {
    const showPasswordButton = document.querySelector(passwordBtn);

    showPasswordButton.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });
  }
}

export default showPassword;
