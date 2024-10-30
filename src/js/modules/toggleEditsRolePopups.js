function toggleEditsRolePopups(
  popupSelector,
  triggerSelector,
  closeSelector1,
  closeSelector2
) {
  const popup = document.querySelector(popupSelector);
  const triggers = document.querySelectorAll(triggerSelector);
  const closeButton1 = document.querySelector(closeSelector1);
  const closeButton2 = document.querySelector(closeSelector2);

  if (popup && triggers.length > 0) {
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        popup.classList.remove('hidden');
      });
    });

    [closeButton1, closeButton2].forEach((button) => {
      if (button) {
        button.addEventListener('click', () => {
          popup.classList.add('hidden');
        });
      }
    });
  }
}

export default toggleEditsRolePopups;
