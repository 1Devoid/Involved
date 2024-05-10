function resetPassword(
  triggerSelector,
  popupSelector,
  saveBtnSelector,
  cancelBtnSelector
) {
  const resetPopup = document.getElementById(popupSelector);

  if (resetPopup) {
    const triggerResetPopup = document.getElementById(triggerSelector);
    const saveResetPopup = document.getElementById(saveBtnSelector);
    const cancelResetPopup = document.getElementById(cancelBtnSelector);

    triggerResetPopup.addEventListener('click', () => {
      resetPopup.classList.remove('hidden');
    });

    saveResetPopup.addEventListener('click', () => {
      const newPassword = document.getElementById('new-password');
      const confirmPassword = document.getElementById('confirm-password');
      if (newPassword.value !== confirmPassword.value) {
        alert('The entered passwords do not match');
      } else {
        resetPopup.classList.add('hidden');
        newPassword.value = '';
        confirmPassword.value = '';
      }
    });

    cancelResetPopup.addEventListener('click', () => {
      resetPopup.classList.add('hidden');
    });
  }
}

export default resetPassword;
