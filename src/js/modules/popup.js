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

function addNodePopup() {
  const modalEl = document.getElementById('add-node-popup');

  if (modalEl) {
    const modalBtn = document.getElementById('addNode');
    const closeModalEl = document.getElementById('close-addNode-modal');
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
function showDelegatePopup(
  popupSelector,
  triggerSelector,
  closeSelector,
  submitSelector
) {
  const modalEl = document.getElementById(popupSelector);

  if (modalEl) {
    const modalBtn = document.getElementById(triggerSelector);
    const closeModalEl = document.getElementById(closeSelector);
    const acceptPrivacyEl = document.getElementById(submitSelector);

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

function showDurationDelegate(
  popupSelector,
  triggerSelector,
  closeSelector,
  submitSelector
) {
  const modalEl = document.getElementById(popupSelector);

  if (modalEl) {
    const modalBtn = document.querySelectorAll(triggerSelector);
    const closeModalEl = document.getElementById(closeSelector);
    const acceptPrivacyEl = document.getElementById(submitSelector);

    const roleModal = new Modal(modalEl, {
      placement: 'center',
    });

    modalBtn.forEach((btn) => {
      btn.addEventListener('click', function () {
        roleModal.show();
      });
    });

    closeModalEl.addEventListener('click', function () {
      roleModal.hide();
    });

    acceptPrivacyEl.addEventListener('click', function () {
      roleModal.hide();
    });
  }
}

export { popupInit, addNodePopup, showDelegatePopup, showDurationDelegate };
