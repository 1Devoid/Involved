'use strict';

import dropdownInit from './modules/dropdown.js';
import popupInit from './modules/popup.js';
import inputInit from './modules/input.js';
import inputError from './modules/inputError.js';
import asideNavToggler from './modules/asideNav.js';
import darkThemeToggler from './modules/darkTheme.js';
import arrowRotateInput from './modules/arrowRotateInput.js';
import trimString from './modules/trimString.js';
import checkboxesChecker from './modules/checkboxesChecker.js';
import checkboxesCheckerManage from './modules/checkboxesCheckerManage.js';
import checkboxFilterLabel from './modules/checkboxFilterLabel.js';
import toggleEdit from './modules/toggleEdit.js';
import { Datepicker, Input, initTE } from 'tw-elements';

// window.addEventListener('DOMContentLoaded', () => {
//   window.onload = function () {
//     setTimeout(() => {
//       let preloader = document.querySelector('#preloader');
//       if (!preloader.classList.contains('done')) {
//         preloader.classList.add('done');
//       }
//     }, 1000);
//   };
// });

initTE({ Datepicker, Input });
dropdownInit();
popupInit('info-popup', 'popup');
popupInit('assign-roles-popup', 'assign-roles-btn');
inputInit();
inputError();
asideNavToggler();
darkThemeToggler();
arrowRotateInput('#dropdownButton-1', '#dropdown-1');
arrowRotateInput('#dropdownButton-2', '#dropdown-2');
arrowRotateInput('#dropdownButton-3', '#dropdown-3');
arrowRotateInput('#dropdownFontButton', '#dropdown-font');
arrowRotateInput('#dropdownButton-csv', '#dropdown-csv');
arrowRotateInput('#dropdownButton-addUser', '#dropdown-addUser');
arrowRotateInput('#dropdownButton-delegated', '#dropdown-delegated');
arrowRotateInput('#dropdownButton-status', '#dropdown-status');
arrowRotateInput('#dropdownButton-entitlement', '#dropdown-entitlement');
arrowRotateInput('#dropdownButton-deatailsAction', '#dropdown-deatailsAction');
arrowRotateInput('#dropdownButton-node', '#dropdown-node');
arrowRotateInput('#dropdownButton-node2', '#dropdown-node2');
arrowRotateInput('#dropdownButton-node-access', '#dropdown-node-access');
arrowRotateInput('#dropdownButton-appRole', '#dropdown-appRole');
arrowRotateInput('#dropdownButton-role-1', '#dropdown-role-1');
arrowRotateInput('#dropdownButton-role-2', '#dropdown-role-2');
arrowRotateInput('#dropdownButton-add-type', '#dropdown-add-type');
arrowRotateInput('#dropdownButton-appRole-2', '#dropdown-appRole-2');
arrowRotateInput('#dropdownButton-profileNode', '#dropdown-profileNode');
arrowRotateInput('#dropdownButton-select-popup', '#dropdown-select-popup');
arrowRotateInput(
  '#dropdownButton-profileHomeNode',
  '#dropdown-profileHomeNode'
);
trimString('[data-trim16]', 16);
trimString('[data-trim20]', 20);
trimString('[data-trim34]', 34);
trimString('[data-trim60]', 60);
checkboxesChecker();
checkboxesCheckerManage();
checkboxFilterLabel(
  '[data-checkbox="role-application-label"]',
  '[data-checkbox="role-application"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-application-label-2"]',
  '[data-checkbox="role-application-2"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-node-label"]',
  '[data-checkbox="role-node"]'
);
checkboxFilterLabel(
  '[data-checkbox="idrm-node-label"]',
  '[data-checkbox="idrm-node"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-manager-label"]',
  '[data-checkbox="role-manager"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-node-label-2"]',
  '[data-checkbox="role-node-2"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-node-label-3"]',
  '[data-checkbox="role-node-3"]'
);
checkboxFilterLabel(
  '[data-checkbox="entitlement-label"]',
  '[data-checkbox="entitlement"]'
);
checkboxFilterLabel(
  '[data-checkbox="status-label"]',
  '[data-checkbox="status"]'
);
checkboxFilterLabel(
  '[data-checkbox="role-select-label"]',
  '[data-checkbox="role-select"]'
);

if (document.getElementById('edit-node')) {
  document.getElementById('edit-node').addEventListener('click', toggleEdit);

  document
    .getElementById('cancel-node-btn')
    .addEventListener('click', toggleEdit);
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
addNodePopup();
