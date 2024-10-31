function showPassword() {
  const passwordInput = document.querySelector('#password-login');

  if (passwordInput) {
    const showPasswordButton = document.querySelector('#password-login-show');

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
