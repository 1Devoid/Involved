function toggleAccessRolePopup() {
  const popup = document.getElementById('access-role-popup');
  const trigger = document.getElementById('access-role-trigger');
  const cancel = document.getElementById('access-role-cancel');
  const add = document.getElementById('access-role-add');

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

export default toggleAccessRolePopup;
