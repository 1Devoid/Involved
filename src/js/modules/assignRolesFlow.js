function assignRolesFlow() {
  const modalEl = document.getElementById('assign-flow-popup');
  const assignDurationEl = document.getElementById('assign-duration-popup');
  const assignConfirmEl = document.getElementById('assign-roles-confirm-popup');

  function assignRolesPopup() {
    if (modalEl) {
      const modalTriggerBtn = document.getElementById('assign-roles-btn');
      modalTriggerBtn.addEventListener('click', () => {
        modalEl.classList.remove('hidden');
      });

      const changeDateBtns = document.querySelectorAll('.change-date-popup');
      changeDateBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
          assignDurationEl.classList.remove('hidden');
        });
      });

      const closeModalBtn = document.getElementById('assign-flow-close');
      closeModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
      });

      const cancelModalBtn = document.getElementById('assign-flow-cancel');
      cancelModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
      });

      const saveModalBtn = document.getElementById('assign-flow-save');
      saveModalBtn.addEventListener('click', () => {
        modalEl.classList.add('hidden');
        assignConfirmEl.classList.remove('hidden');
      });
    }
  }

  assignRolesPopup();

  function assignDurationPopup() {
    if (assignDurationEl) {
      const cancelModalBtn = document.getElementById('assign-duration-close');
      cancelModalBtn.addEventListener('click', () => {
        assignDurationEl.classList.add('hidden');
        modalEl.classList.remove('hidden');
      });

      const saveModalBtn = document.getElementById('assign-duration-save');
      saveModalBtn.addEventListener('click', () => {
        assignDurationEl.classList.add('hidden');
        modalEl.classList.remove('hidden');
      });
    }
  }

  assignDurationPopup();

  function assignDurationPopupLogic() {
    if (assignDurationEl) {
      function toggleExpirationFields() {
        let noExpireCheckbox = document.getElementById(
          'assign-duration-no-expire'
        );
        let expireDateField = document.getElementById(
          'assign-duration-expire-date'
        );
        let expireTextField = document.getElementById(
          'assign-duration-expire-text'
        );
        let expireDateBtn = document.querySelector(
          '#assign-duration-expire-date ~ button'
        );
        let togglers = document.getElementById('assign-duration-togglers');

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
        .getElementById('assign-duration-no-expire')
        .addEventListener('change', toggleExpirationFields);

      function toggleExpirationType() {
        var daysCheckbox = document.getElementById('assign-duration-days');
        var expireDateWrap = document.getElementById(
          'assign-duration-expire-date-wrap'
        );
        var expireTextWrap = document.getElementById(
          'assign-duration-expire-text-wrap'
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
        .getElementById('assign-duration-days')
        .addEventListener('change', toggleExpirationType);

      var startDateInput = document.getElementById(
        'assign-duration-start-date'
      );

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
          '#assign-duration-start-date ~ .group[data-te-input-notch-ref]'
        );
        const inputLabel = document.querySelector(
          '#assign-duration-start-date-label'
        );
        const errorMsg = document.querySelector(
          '#assign-duration-start-date-error'
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

  assignDurationPopupLogic();

  function assignConfirmPopup() {
    if (assignConfirmEl) {
      const closeModalBtn = document.getElementById(
        'assign-roles-confirm-close'
      );
      closeModalBtn.addEventListener('click', () => {
        assignConfirmEl.classList.add('hidden');
      });

      const backModalBtn = document.getElementById('assign-roles-back');
      backModalBtn.addEventListener('click', () => {
        assignConfirmEl.classList.add('hidden');
        modalEl.classList.remove('hidden');
      });

      const cancelModalBtn = document.getElementById(
        'assign-roles-confirm-cancel'
      );
      cancelModalBtn.addEventListener('click', () => {
        assignConfirmEl.classList.add('hidden');
      });

      const confirmModalBtn = document.getElementById(
        'assign-roles-confirm-confirm'
      );
      confirmModalBtn.addEventListener('click', () => {
        assignConfirmEl.classList.add('hidden');
      });
    }
  }

  assignConfirmPopup();
}

export default assignRolesFlow;
