function editApplicationPopup() {
  const triggers = document.querySelectorAll('.edit-application-trigger');
  const cancelButton = document.getElementById('edit-application-cancel');
  const applicationAddButton = document.getElementById('edit-application-add');
  const applicationPopup = document.getElementById('edit-application-popup');

  if (applicationAddButton) {
    triggers.forEach((btn) => {
      btn.addEventListener('click', function () {
        applicationPopup.classList.remove('hidden');
      });
    });

    cancelButton.addEventListener('click', function () {
      applicationPopup.classList.add('hidden');
    });

    applicationAddButton.addEventListener('click', function () {
      applicationPopup.classList.add('hidden');
    });

    document
      .getElementById('actions-edit-delete')
      .addEventListener('click', function () {
        document.getElementById('edit-application-popup').click();
      });
  }
}

export default editApplicationPopup;
