function toggleRolePopup() {
  const popup = document.getElementById('role-popup');
  const trigger = document.getElementById('role-popup-trigger');
  const cancel = document.getElementById('role-popup-cancel');
  const add = document.getElementById('role-popup-add');

  if (popup && trigger && cancel && add) {
    trigger.addEventListener('click', () => {
      popup.classList.remove('hidden');
    });

    [cancel, add].forEach((button) => {
      button.addEventListener('click', () => {
        popup.classList.add('hidden');
      });
    });
  }
}

export default toggleRolePopup;
