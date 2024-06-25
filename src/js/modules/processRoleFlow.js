function processRoleFlow() {
  if (document.getElementById('process-role-popup')) {
    // Show Action btn
    function toggleActionsButtonRolesTab() {
      const subRolesCheckboxes = document.querySelectorAll(
        'input[type="checkbox"][data-checkbox="subRoles"]'
      );
      const masterRolesCheckboxes = document.querySelectorAll(
        'input[type="checkbox"][data-checkbox="masterRoles"]'
      );

      const isSubRolesChecked = Array.from(subRolesCheckboxes).some(
        (checkbox) => checkbox.checked
      );
      const isMasterRolesChecked = Array.from(masterRolesCheckboxes).some(
        (checkbox) => checkbox.checked
      );

      const actionsButton = document.getElementById('actionsButton-rolesTab');

      if (isSubRolesChecked || isMasterRolesChecked) {
        actionsButton.classList.remove('hidden');
      } else {
        actionsButton.classList.add('hidden');
      }
    }

    document
      .querySelectorAll(
        'input[type="checkbox"][data-checkbox="subRoles"], input[type="checkbox"][data-checkbox="masterRoles"]'
      )
      .forEach((checkbox) => {
        checkbox.addEventListener('change', toggleActionsButtonRolesTab);
      });

    toggleActionsButtonRolesTab();

    // Process popup show/hide
    function initializePopupHandlers() {
      const popupElement = document.getElementById('process-role-popup');
      const popupRolesBtn = document.getElementById('process-roles-btn');

      document.querySelectorAll('.process-popup-trigger').forEach((button) => {
        button.addEventListener('click', function () {
          popupElement.classList.remove('hidden');
        });
      });

      popupRolesBtn.addEventListener('click', function () {
        popupElement.classList.remove('hidden');
      });

      const buttonsToHidePopup = ['process-role-reset', 'process-role-confirm'];

      buttonsToHidePopup.forEach(function (buttonId) {
        document
          .getElementById(buttonId)
          .addEventListener('click', function () {
            popupElement.classList.add('hidden');
            popupRolesBtn.classList.add('hidden');
          });
      });
    }

    initializePopupHandlers();

    // Process btn handler
    function toggleProcessRolesBtn() {
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"][data-checkbox="subRoles"]'
      );
      let isChecked = false;
      let checkedCount = 0;

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          isChecked = true;
          checkedCount++;
        }
      });

      const processRolesBtn = document.getElementById('process-roles-btn');
      const processRolePopup = document.getElementById('process-role-popup');
      const processRolesLabel = document.querySelector(
        '[data-filter="process-roles-label"]'
      );

      if (isChecked) {
        processRolesBtn.classList.remove('hidden');
      } else {
        processRolesBtn.classList.add('hidden');
      }

      processRolesLabel.textContent = checkedCount;
      processRolesLabel.classList.toggle('hidden', checkedCount === 0);

      processRolePopup.classList.add('hidden');
    }

    document
      .getElementById('process-role-close')
      .addEventListener('click', function () {
        const processRolePopup = document.getElementById('process-role-popup');
        processRolePopup.classList.add('hidden');
        toggleProcessRolesBtn();
      });

    document
      .getElementById('process-role-continue')
      .addEventListener('click', function () {
        const processRolePopup = document.getElementById('process-role-popup');
        processRolePopup.classList.add('hidden');
        toggleProcessRolesBtn();
      });

    // Expire Roles popup handler
    function togglePopups() {
      const processRolePopup = document.getElementById('process-role-popup');
      const expireRolesProcessPopup =
        document.getElementById('expire-roles-popup');
      processRolePopup.classList.add('hidden');
      expireRolesProcessPopup.classList.remove('hidden');

      const buttonsToHidePopup = ['expire-roles-cancel', 'expire-roles-save'];

      buttonsToHidePopup.forEach(function (buttonId) {
        document
          .getElementById(buttonId)
          .addEventListener('click', function () {
            processRolePopup.classList.remove('hidden');
            expireRolesProcessPopup.classList.add('hidden');
          });
      });
    }

    document.addEventListener('click', function (event) {
      if (event.target.matches('[expire-popup-toggle]')) {
        togglePopups();
      }
    });

    // Block scrollbar when popup open
    function toggleBodyScroll() {
      const assignFlowPopup = document.getElementById('assign-flow-popup');
      const processRolePopup = document.getElementById('process-role-popup');

      if (
        !assignFlowPopup.classList.contains('hidden') ||
        !processRolePopup.classList.contains('hidden')
      ) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    document.addEventListener('DOMContentLoaded', toggleBodyScroll);

    const observer = new MutationObserver(toggleBodyScroll);
    observer.observe(document.getElementById('assign-flow-popup'), {
      attributes: true,
    });
    observer.observe(document.getElementById('process-role-popup'), {
      attributes: true,
    });

    // Adding checked status for item-row
    function addCheckedOnTriggerClick() {
      const triggers = document.querySelectorAll('[data-extended-trigger]');

      triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const parentTr = trigger.closest('tr');

          if (parentTr) {
            const extendedElement = parentTr.querySelector('[data-extended]');

            if (extendedElement) {
              extendedElement.checked = true;
            }
          }
        });
      });
    }

    document.addEventListener('DOMContentLoaded', addCheckedOnTriggerClick);

    // Logic assign-popup-add-role
    function setupRolePopupToggle() {
      var addRoleTrigger = document.getElementById(
        'assign-popup-add-role-trigger'
      );
      var addRoleClose = document.getElementById('assign-popup-add-role-close');
      var addRoleConfirm = document.getElementById(
        'assign-popup-add-role-confirm'
      );
      var addRolePopup = document.getElementById('assign-popup-add-role');
      var flowPopup = document.getElementById('assign-flow-popup');

      if (addRoleTrigger) {
        addRoleTrigger.addEventListener('click', function () {
          if (addRolePopup && flowPopup) {
            addRolePopup.classList.remove('hidden');
            flowPopup.classList.add('hidden');
          }
        });
      }

      function closeAddRolePopup() {
        if (addRolePopup && flowPopup) {
          addRolePopup.classList.add('hidden');
          flowPopup.classList.remove('hidden');
        }
      }

      if (addRoleClose) {
        addRoleClose.addEventListener('click', closeAddRolePopup);
      }

      if (addRoleConfirm) {
        addRoleConfirm.addEventListener('click', closeAddRolePopup);
      }
    }

    setupRolePopupToggle();
  }
}

export default processRoleFlow;
