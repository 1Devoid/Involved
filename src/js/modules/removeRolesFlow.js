function removeRolesFlow() {
  const modalEl = document.getElementById('remove-roles-popup');
  const removeConfirmEl = document.getElementById('remove-roles-confirm-popup');

  if (modalEl) {
    function removeRolesPopup() {
      if (modalEl) {
        const modalTriggerBtn = document.getElementById('remove-roles-btn');
        modalTriggerBtn.addEventListener('click', () => {
          modalEl.classList.remove('hidden');
        });

        const closeModalBtn = document.getElementById('remove-roles-close');
        closeModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
        });

        const cancelModalBtn = document.getElementById('remove-roles-cancel');
        cancelModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
        });

        const saveModalBtn = document.getElementById('remove-roles-save');
        saveModalBtn.addEventListener('click', () => {
          modalEl.classList.add('hidden');
          removeConfirmEl.classList.remove('hidden');
        });
      }
    }

    removeRolesPopup();

    function removeConfirmPopup() {
      if (removeConfirmEl) {
        const closeModalBtn = document.getElementById(
          'remove-roles-confirm-close'
        );
        closeModalBtn.addEventListener('click', () => {
          removeConfirmEl.classList.add('hidden');
        });

        const backModalBtn = document.getElementById('remove-roles-back');
        backModalBtn.addEventListener('click', () => {
          removeConfirmEl.classList.add('hidden');
          modalEl.classList.remove('hidden');
        });

        const cancelModalBtn = document.getElementById(
          'remove-roles-confirm-cancel'
        );
        cancelModalBtn.addEventListener('click', () => {
          removeConfirmEl.classList.add('hidden');
        });

        const confirmModalBtn = document.getElementById(
          'remove-roles-confirm-confirm'
        );
        confirmModalBtn.addEventListener('click', () => {
          removeConfirmEl.classList.add('hidden');
        });
      }
    }

    removeConfirmPopup();

    function resetLogic() {
      function checkIfAnyCheckboxChecked() {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-checkbox="subRoles-4"]'
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
          'input[type="checkbox"][data-checkbox="subRoles-4"]'
        );
        const masterCheckbox = document.querySelector(
          'input[type="checkbox"][data-checkbox="masterRoles-4"]'
        );
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        masterCheckbox.checked = false;

        const resetButton = document.getElementById('resetButton-roles');
        resetButton.classList.add('hidden');

        const labelElement = document.querySelector(
          '[data-filter="remove-roles-label"]'
        );
        labelElement.classList.add('hidden');
      }

      function updateCheckedCount() {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-checkbox="subRoles-4"]'
        );
        const checkedCount = Array.from(checkboxes).filter(
          (checkbox) => checkbox.checked
        ).length;
        const labelElement = document.querySelector(
          '[data-filter="remove-roles-label"]'
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
        .getElementById('remove-roles-close')
        .addEventListener('click', () => {
          checkIfAnyCheckboxChecked();
          updateCheckedCount();
        });
      document
        .getElementById('remove-roles-confirm-close')
        .addEventListener('click', () => {
          checkIfAnyCheckboxChecked();
          updateCheckedCount();
        });
      document
        .getElementById('remove-roles-cancel')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
      document
        .getElementById('remove-roles-confirm-cancel')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
      document
        .getElementById('reset-remove-roles')
        .addEventListener('click', () => {
          uncheckAllCheckboxes();
          updateCheckedCount();
        });
    }
    resetLogic();
  }
}

export default removeRolesFlow;
