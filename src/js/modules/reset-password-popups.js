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
      resetPopup.classList.add('hidden');
    });

    cancelResetPopup.addEventListener('click', () => {
      resetPopup.classList.add('hidden');
    });
  }
}

export default resetPassword;
