function setupApplicationPopup() {
  const addButton = document.getElementById('add-application');
  const cancelButton = document.getElementById('application-cancel');
  const applicationAddButton = document.getElementById('application-add');
  const applicationPopup = document.getElementById('application-popup');
  const applicationSuccess = document.getElementById('application-success');

  if (addButton) {
    addButton.addEventListener('click', function () {
      applicationPopup.classList.remove('hidden');
    });

    cancelButton.addEventListener('click', function () {
      applicationPopup.classList.add('hidden');
    });

    applicationAddButton.addEventListener('click', function () {
      applicationPopup.classList.add('hidden');
      applicationSuccess.classList.remove('hidden');
      setTimeout(function () {
        applicationSuccess.classList.add('hidden');
      }, 5000);
    });
  }
}

export default setupApplicationPopup;
