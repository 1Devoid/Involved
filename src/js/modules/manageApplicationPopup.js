function manageApplicationPopup() {
  const triggers = document.querySelectorAll('.manage-application-trigger');
  const cancelButton = document.getElementById('manage-application-cancel');
  const applicationAddButton = document.getElementById(
    'manage-application-done'
  );
  const applicationPopup = document.getElementById('manage-application-popup');

  const addNewButton = document.getElementById('application-add-new');
  const removeButton = document.getElementById('application-remove');

  const addNewPopup = document.getElementById('add-application-popup');
  const addNewCancelButton = document.getElementById('add-application-cancel');
  const addNewSaveButton = document.getElementById('add-application-save');

  const removePopup = document.getElementById('remove-application-popup');
  const removeCancelButton = document.getElementById(
    'remove-application-cancel'
  );
  const removeDoneButton = document.getElementById('remove-application-done');

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

    addNewButton.addEventListener('click', function () {
      addNewPopup.classList.remove('hidden');
    });

    addNewCancelButton.addEventListener('click', function () {
      addNewPopup.classList.add('hidden');
    });

    addNewSaveButton.addEventListener('click', function () {
      addNewPopup.classList.add('hidden');
    });

    removeButton.addEventListener('click', function () {
      removePopup.classList.remove('hidden');
    });

    removeCancelButton.addEventListener('click', function () {
      removePopup.classList.add('hidden');
    });

    removeDoneButton.addEventListener('click', function () {
      removePopup.classList.add('hidden');
    });
  }
}

export default manageApplicationPopup;
