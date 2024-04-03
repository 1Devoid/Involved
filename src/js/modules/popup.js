function popupInit(selector, triggerSelector) {
  const modalEl = document.getElementById(selector);

  if (modalEl) {
    const modalBtn = document.getElementById(triggerSelector);
    const closeModalEl = document.getElementById('close-modal');
    const acceptPrivacyEl = document.getElementById('confirm-button');

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

export default popupInit;
