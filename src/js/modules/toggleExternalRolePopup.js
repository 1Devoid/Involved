function toggleExternalRolePopup() {
  const popup = document.getElementById('external-role-popup');
  const trigger = document.getElementById('external-role-trigger');
  const cancel = document.getElementById('external-role-cancel');
  const add = document.getElementById('external-role-add');

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

export default toggleExternalRolePopup;
