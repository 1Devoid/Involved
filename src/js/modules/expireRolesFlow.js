function expireRolesFlow() {
  const modalEl = document.getElementById('expire-flow-popup');
  const expireConfirmEl = document.getElementById('expire-roles-confirm-popup');

  if (modalEl) {
    function expireRolesPopup() {
      if (modalEl) {
        const modalTriggerBtn = document.getElementById('expire-roles-btn');
        modalTriggerBtn.addEventListener('click', () => {
          modalEl.classList.remove('hidden');
        });

        const closeModalBtn = document.getElementById('expire-flow-close');
        closeModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
        });

        const cancelModalBtn = document.getElementById('expire-flow-cancel');
        cancelModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
        });

        const saveModalBtn = document.getElementById('expire-flow-save');
        saveModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
          expireConfirmEl.classList.remove('hidden');
        });
      }
    }

    expireRolesPopup();

    function expireConfirmPopup() {
      if (expireConfirmEl) {
        const closeModalBtn = document.getElementById(
          'expire-roles-confirm-close'
        );
        closeModalBtn.addEventListener('click', () => {
          expireConfirmEl.classList.add('hidden');
        });

        const backModalBtn = document.getElementById('expire-roles-back');
        backModalBtn.addEventListener('click', () => {
          expireConfirmEl.classList.add('hidden');
          modalEl.classList.remove('hidden');
        });

        const cancelModalBtn = document.getElementById(
          'expire-roles-confirm-cancel'
        );
        cancelModalBtn.addEventListener('click', () => {
          expireConfirmEl.classList.add('hidden');
        });

        const confirmModalBtn = document.getElementById(
          'expire-roles-confirm-confirm'
        );
        confirmModalBtn.addEventListener('click', () => {
          expireConfirmEl.classList.add('hidden');
        });
      }
    }

    expireConfirmPopup();

    function resetLogic() {
      function checkIfAnyCheckboxChecked() {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-checkbox="subRoles-3"]'
        );
        const resetButton = document.getElementById('resetButton-roles');

        let isAnyChecked = false;
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            isAnyChecked = true;
          }
        });

        if (isAnyChecked) {
          resetButton.classList.remove('hidden');
        } else {
          resetButton.classList.add('hidden');
        }
      }

      function uncheckAllCheckboxes() {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-checkbox="subRoles-3"]'
        );
        const masterCheckbox = document.querySelector(
          'input[type="checkbox"][data-checkbox="masterRoles-3"]'
        );
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        masterCheckbox.checked = false;

        const resetButton = document.getElementById('resetButton-roles');
        resetButton.classList.add('hidden');

        const labelElement = document.querySelector(
          '[data-filter="expire-roles-label"]'
        );
        labelElement.classList.add('hidden');
      }

      function updateCheckedCount() {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-checkbox="subRoles-3"]'
        );
        const checkedCount = Array.from(checkboxes).filter(
          (checkbox) => checkbox.checked
        ).length;
        const labelElement = document.querySelector(
          '[data-filter="expire-roles-label"]'
        );
        if (checkedCount > 0) {
          labelElement.textContent = checkedCount;
          labelElement.classList.remove('hidden');
        } else {
          labelElement.classList.add('hidden');
          labelElement.textContent = 0;
        }
      }

      document
        .getElementById('expire-flow-close')
        .addEventListener('click', () => {
          checkIfAnyCheckboxChecked();
          updateCheckedCount();
        });
      document
        .getElementById('expire-roles-confirm-close')
        .addEventListener('click', () => {
          checkIfAnyCheckboxChecked();
          updateCheckedCount();
        });
      document
        .getElementById('expire-flow-cancel')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
      document
        .getElementById('expire-roles-confirm-cancel')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
      document
        .getElementById('reset-expire-roles')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
    }
    resetLogic();
  }
}

export default expireRolesFlow;
