'use strict';

import { Datepicker, Input, initTE } from 'tw-elements';
import dropdownInit from './modules/dropdown.js';
import { popupInit, addNodePopup, showDelegatePopup } from './modules/popup.js';
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
import asideNodeClickHandler from './modules/asideNodeClickHandler.js';
import handkerExpandBtn from './modules/handkerExpandBtn.js';
import quotaExpire from './modules/quotaExpire.js';
import manageQuotasPopup from './modules/manageQuotasPopup.js';
import addDelegatePopup from './modules/addDelegatePopup.js';

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
popupInit('add-roles-popup', 'add-roles-btn');
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
arrowRotateInput('#dropdownColorButton-2', '#dropdown-color-2');
arrowRotateInput('#dropdownColorButton-3', '#dropdown-color-3');
arrowRotateInput('#dropdownButton-select-role', '#dropdown-select-role');
arrowRotateInput('#dropdownButton-add-node-popup', '#dropdown-add-node-popup');
arrowRotateInput('#dropdownButton-roles-type', '#dropdown-roles-type');
arrowRotateInput('#dropdownButton-add-delegate', '#dropdown-add-delegate');
arrowRotateInput('#dropdownButton-delegates-role', '#dropdown-delegates-role');
arrowRotateInput(
  '#dropdownButton-select-username',
  '#dropdown-select-username'
);
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
checkboxFilterLabel(
  '[data-checkbox="select-role-label"]',
  '[data-checkbox="select-role"]'
);
checkboxFilterLabel(
  '[data-checkbox="select-roles-type-label"]',
  '[data-checkbox="select-roles-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="delegates-role-label"]',
  '[data-checkbox="delegates-role"]'
);

if (document.getElementById('edit-node')) {
  document.getElementById('edit-node').addEventListener('click', toggleEdit);

  document
    .getElementById('cancel-node-btn')
    .addEventListener('click', toggleEdit);
}

addNodePopup();

asideNodeClickHandler();

handkerExpandBtn();

quotaExpire();

manageQuotasPopup();

addDelegatePopup();

showDelegatePopup();
