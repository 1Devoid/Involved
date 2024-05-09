function extendRolesFlow() {
  const modalEl = document.getElementById('extend-roles-popup');
  const expireEl = document.getElementById('expire-roles-popup');
  const extendConfirmEl = document.getElementById('extend-roles-confirm-popup');

  function extendRolesPopup() {
    if (modalEl) {
      const modalTriggerBtn = document.getElementById('extend-roles-btn');
      modalTriggerBtn.addEventListener('click', () => {
        modalEl.classList.remove('hidden');
      });

      const expireDaterBtn = document.getElementById('expire-date-btn');
      expireDaterBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
        expireEl.classList.remove('hidden');
      });

      const closeModalBtn = document.getElementById('extend-roles-close');
      closeModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
      });

      const cancelModalBtn = document.getElementById('extend-roles-cancel');
      cancelModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
      });

      const saveModalBtn = document.getElementById('extend-roles-save');
      saveModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
        extendConfirmEl.classList.remove('hidden');
      });
    }
  }

  extendRolesPopup();

  function expireRolesPopup() {
    if (expireEl) {
      const cancelModalBtn = document.getElementById('expire-roles-cancel');
      cancelModalBtn.addEventListener('click', () => {
        expireEl.classList.add('hidden');
        modalEl.classList.remove('hidden');
      });

      const saveModalBtn = document.getElementById('expire-roles-save');
      saveModalBtn.addEventListener('click', () => {
        expireEl.classList.add('hidden');
        modalEl.classList.remove('hidden');
      });
    }
  }

  expireRolesPopup();

  function expireRolesPopupLogic() {
    if (expireEl) {
      function toggleExpirationFields() {
        let noExpireCheckbox = document.getElementById(
          'expire-roles-no-expire'
        );
        let expireDateField = document.getElementById(
          'expire-roles-expire-date'
        );
        let expireTextField = document.getElementById(
          'expire-roles-expire-text'
        );
        let expireDateBtn = document.querySelector(
          '#expire-roles-expire-date ~ button'
        );
        let togglers = document.getElementById('expire-roles-togglers');

        if (noExpireCheckbox.checked) {
          expireDateField.disabled = true;
          expireTextField.disabled = true;
          expireDateBtn.disabled = true;
          togglers.classList.add('opacity-50');
        } else {
          expireDateField.disabled = false;
          expireTextField.disabled = false;
          expireDateBtn.disabled = false;
          togglers.classList.remove('opacity-50');
        }
      }

      document
        .getElementById('expire-roles-no-expire')
        .addEventListener('change', toggleExpirationFields);

      function toggleExpirationType() {
        var daysCheckbox = document.getElementById('expire-roles-days');
        var expireDateWrap = document.getElementById(
          'expire-roles-expire-date-wrap'
        );
        var expireTextWrap = document.getElementById(
          'expire-roles-expire-text-wrap'
        );

        if (daysCheckbox.checked) {
          expireDateWrap.style.display = 'none';
          expireTextWrap.style.display = 'block';
        } else {
          expireDateWrap.style.display = 'block';
          expireTextWrap.style.display = 'none';
        }
      }

      document
        .getElementById('expire-roles-days')
        .addEventListener('change', toggleExpirationType);

      var startDateInput = document.getElementById('expire-roles-start-date');

      startDateInput.addEventListener('input', function () {
        var startDateValue = startDateInput.value;
        var parts = startDateValue.split('/');
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1;
        var year = parseInt(parts[2], 10);

        var inputDate = new Date(year, month, day, 0, 0, 0, 0);
        var currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const inputDateDelegation = document.querySelector(
          '#expire-roles-start-date ~ .group[data-te-input-notch-ref]'
        );
        const inputLabel = document.querySelector(
          '#expire-roles-start-date-label'
        );
        const errorMsg = document.querySelector(
          '#expire-roles-start-date-error'
        );
        if (inputDate >= currentDate) {
          inputDateDelegation.classList.remove('error');
          inputLabel.classList.remove('error');
          errorMsg.classList.add('hidden');
        } else {
          inputDateDelegation.classList.add('error');
          inputLabel.classList.add('error');
          errorMsg.classList.remove('hidden');
        }
      });
    }
  }

  expireRolesPopupLogic();

  function extendConfirmPopup() {
    if (extendConfirmEl) {
      const closeModalBtn = document.getElementById(
        'extend-roles-confirm-close'
      );

      closeModalBtn.addEventListener('click', () => {
        extendConfirmEl.classList.add('hidden');
      });

      const cancelModalBtn = document.getElementById(
        'extend-roles-confirm-cancel'
      );
      cancelModalBtn.addEventListener('click', () => {
        extendConfirmEl.classList.add('hidden');
      });

      const confirmModalBtn = document.getElementById(
        'extend-roles-confirm-confirm'
      );
      confirmModalBtn.addEventListener('click', () => {
        extendConfirmEl.classList.add('hidden');
      });
    }
  }

  extendConfirmPopup();
}

export default extendRolesFlow;
