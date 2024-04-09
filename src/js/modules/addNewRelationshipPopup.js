function addNewRelationshipPopup() {
  const modalEl = document.getElementById('add-relationship-popup');

  if (modalEl) {
    const modalBtn = document.getElementById('newRelationBtn');
    const closeModalEl = document.getElementById('relationship-close');
    const acceptPrivacyEl = document.getElementById('relationship-save');

    let expireToggler = document.getElementById('relationship-popup-no-expire');

    if (expireToggler) {
      expireToggler.addEventListener('click', function () {
        var quotaInput = document.getElementById('relationship-expire-input');
        var quotaLabel = document.querySelector(
          '#relationship-expire-input ~ label'
        );
        if (quotaInput.hasAttribute('disabled')) {
          quotaInput.removeAttribute('disabled');
          quotaLabel.classList.remove('opacity-50');
        } else {
          quotaInput.setAttribute('disabled', 'disabled');
          quotaLabel.classList.add('opacity-50');
        }
      });
    }

    const roleModal = new Modal(modalEl, {
      placement: 'center',
    });

    modalBtn.addEventListener('click', function () {
      roleModal.show();
    });

    closeModalEl.addEventListener('click', function () {
      roleModal.hide();
    });

    acceptPrivacyEl.addEventListener('click', function () {
      roleModal.hide();
    });
  }
}

export default addNewRelationshipPopup;
