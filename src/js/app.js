'use strict';

import { Datepicker, Input, initTE } from 'tw-elements';
import dropdownInit from './modules/dropdown.js';
import {
  popupInit,
  addNodePopup,
  showDelegatePopup,
  showDurationDelegate,
  changeDatePopup,
} from './modules/popup.js';
import inputInit from './modules/input.js';
import inputError from './modules/inputError.js';
import asideNavToggler from './modules/asideNav.js';
import darkThemeToggler from './modules/darkTheme.js';
import arrowRotateInput from './modules/arrowRotateInput.js';
import trimString from './modules/trimString.js';
import checkboxesChecker from './modules/checkboxesChecker.js';
import processRoleFlow from './modules/processRoleFlow.js';
import checkboxesCheckerManage from './modules/checkboxesCheckerManage.js';
import checkboxFilterLabel from './modules/checkboxFilterLabel.js';
import { toggleEdit, toggleRelationshipsEdit } from './modules/toggleEdit.js';
import asideNodeClickHandler from './modules/asideNodeClickHandler.js';
import handlerExpandBtn from './modules/handlerExpandBtn.js';
import quotaExpire from './modules/quotaExpire.js';
import manageQuotasPopup from './modules/manageQuotasPopup.js';
import addDelegatePopup from './modules/addDelegatePopup.js';
import addChangeDatePopup from './modules/addChangeDatePopup.js';
import delegateDurationPopup from './modules/delegateDurationPopup.js';
import addNewRelationshipPopup from './modules/addNewRelationshipPopup.js';
import resetPassword from './modules/reset-password-popups.js';
import addChangeDurationPopup from './modules/addChangeDurationPopup.js';
import extendRolesFlow from './modules/extendRolesFlow.js';
import expireRolesFlow from './modules/expireRolesFlow.js';
import removeRolesFlow from './modules/removeRolesFlow.js';
import assignRolesFlow from './modules/assignRolesFlow.js';
import hideResetRoles from './modules/hideResetRoles.js';
import toggleInputsDisabled from './modules/toggleInputsDisabled.js';
import toggleCursorPointerOnSearchInputs from './modules/toggleCursorPointerOnSearchInputs.js';
import toggleStatus from './modules/toggleStatus.js';
import addTabClickListeners from './modules/addTabClickListeners.js';
import setupApplicationPopup from './modules/setupApplicationPopup.js';
import editApplicationPopup from './modules/editApplicationPopup.js';
import manageApplicationPopup from './modules/manageApplicationPopup.js';
import setupActivityHandlers from './modules/setupActivityHandlers.js';
import setupActivityHandlers2 from './modules/setupActivityHandlers2.js';
import addTabPersonaListeners from './modules/addTabPersonaListeners.js';
import togglePersonaPopup from './modules/togglePersonaPopup.js';
import addTabDashboardListeners from './modules/addTabDashboardListeners.js';
import toggleInviteButton from './modules/toggleInviteButton.js';
import checkInputsAndToggleButton from './modules/checkInputsAndToggleButton.js';
import toggleAccessRolePopup from './modules/toggleAccessRolePopup.js';
import toggleExternalRolePopup from './modules/toggleExternalRolePopup.js';
import toggleEditsRolePopups from './modules/toggleEditsRolePopups.js';
import addErrorClassToElements from './modules/addErrorClassToElements.js';
import initImageSlider from './modules/initImageSlider.js';
import showPassword from './modules/showPassword.js';
import {
  activateCheckedRadio,
  activateCheckedRadioList,
} from './modules/activateCheckedRadio.js';

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
arrowRotateInput('#dropdownButton-level', '#dropdown-level');
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
arrowRotateInput('#dropdownColorButton-4', '#dropdown-color-4');
arrowRotateInput('#dropdownColorButton-5', '#dropdown-color-5');
arrowRotateInput('#dropdownButton-select-role', '#dropdown-select-role');
arrowRotateInput('#dropdownButton-add-node-popup', '#dropdown-add-node-popup');
arrowRotateInput('#dropdownButton-roles-type', '#dropdown-roles-type');
arrowRotateInput('#dropdownButton-add-delegate', '#dropdown-add-delegate');
arrowRotateInput('#dropdownButton-delegates-role', '#dropdown-delegates-role');
arrowRotateInput('#dropdownButton-action', '#dropdown-action');
arrowRotateInput(
  '#dropdownButton-select-username',
  '#dropdown-select-username'
);
arrowRotateInput(
  '#dropdownButton-profileHomeNode',
  '#dropdown-profileHomeNode'
);
arrowRotateInput('#dropdownButton-roles-history', '#dropdown-roles-history');
arrowRotateInput('#dropdownButton-roles-tab', '#dropdown-roles-tab');
arrowRotateInput('#dropdownButton-roles-tab-2', '#dropdown-roles-tab-2');
arrowRotateInput('#dropdownButton-roles-tab-3', '#dropdown-roles-tab-3');
arrowRotateInput('#dropdownButton-roles-tab-4', '#dropdown-roles-tab-4');
arrowRotateInput('#dropdownButton-roles-tab-5', '#dropdown-roles-tab-5');
arrowRotateInput('#dropdownButton-nodes-tab', '#dropdown-nodes-tab');
arrowRotateInput('#dropdownButton-nodes-tab-2', '#dropdown-nodes-tab-2');
arrowRotateInput('#dropdownButton-nodes-tab-3', '#dropdown-nodes-tab-3');
arrowRotateInput('#dropdownButton-nodes-tab-4', '#dropdown-nodes-tab-4');
arrowRotateInput('#dropdownButton-nodes-tab-5', '#dropdown-nodes-tab-5');
arrowRotateInput('#dropdownButton-status-tab', '#dropdown-status-tab');
arrowRotateInput('#actionsButton-rolesTab', '#dropdown-actionsButton');
arrowRotateInput('#dropdownButton-icon', '#dropdown-icon');
arrowRotateInput('#dropdownButton-icon-2', '#dropdown-icon-2');
arrowRotateInput('#dropdownButton-icon-3', '#dropdown-icon-3');
-2;

trimString('[data-trim16]', 16);
trimString('[data-trim20]', 20);
trimString('[data-trim34]', 34);
trimString('[data-trim60]', 60);

checkboxesChecker();

checkboxesCheckerManage(
  '[data-checkbox="masterPopup"]',
  '[data-checkbox="usersPopup"]'
);
checkboxesCheckerManage(
  '[data-checkbox="masterRoles"]',
  '[data-checkbox="subRoles"]'
);
checkboxesCheckerManage(
  '[data-checkbox="masterRoles-2"]',
  '[data-checkbox="subRoles-2"]'
);
checkboxesCheckerManage(
  '[data-checkbox="masterRoles-3"]',
  '[data-checkbox="subRoles-3"]'
);
checkboxesCheckerManage(
  '[data-checkbox="masterRoles-4"]',
  '[data-checkbox="subRoles-4"]'
);
checkboxesCheckerManage(
  '[data-checkbox="masterRoles-5"]',
  '[data-checkbox="subRoles-5"]'
);

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
checkboxFilterLabel(
  '[data-checkbox="roles-tab-history-label"]',
  '[data-checkbox="roles-tab-history-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="roles-tab-label"]',
  '[data-checkbox="roles-tab-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="roles-tab-2-label"]',
  '[data-checkbox="roles-tab-2-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="roles-tab-3-label"]',
  '[data-checkbox="roles-tab-3-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="roles-tab-4-label"]',
  '[data-checkbox="roles-tab-4-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="roles-tab-5-label"]',
  '[data-checkbox="roles-tab-5-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-label"]',
  '[data-checkbox="nodes-tab-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="history-nodes-tab-label"]',
  '[data-checkbox="history-nodes-tab-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-label-2"]',
  '[data-checkbox="nodes-tab-type-2"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-2-label"]',
  '[data-checkbox="nodes-tab-2-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-3-label"]',
  '[data-checkbox="nodes-tab-3-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-4-label"]',
  '[data-checkbox="nodes-tab-4-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="nodes-tab-5-label"]',
  '[data-checkbox="nodes-tab-5-type"]'
);
checkboxFilterLabel(
  '[data-checkbox="action-label"]',
  '[data-checkbox="action"]'
);

toggleEdit('edit-detail-msg');
toggleRelationshipsEdit('edit-relationship-msg');

addNodePopup();

asideNodeClickHandler();

handlerExpandBtn();

quotaExpire();

manageQuotasPopup();

addDelegatePopup();

delegateDurationPopup();

showDelegatePopup(
  'add-delegate-popup',
  'add-delegate',
  'add-delegate-close',
  'add-delegate-submit'
);

changeDatePopup(
  'change-date-popup',
  '.change-date',
  '.change-date-close',
  'change-date-save'
);

showDurationDelegate(
  'delegate-duration-popup',
  '.add-delegate-duration',
  'delegate-duration-duration-close',
  'delegate-duration-duration-submit'
);

addNewRelationshipPopup();

resetPassword(
  'reset-password',
  'reset-password-popup',
  'reset-password-save',
  'reset-password-close'
);

// Show user popup for reset password

// resetPassword(
//   'reset-password',
//   'user-reset-password-popup',
//   'user-reset-password-save',
//   'user-reset-password-close'
// );

addChangeDatePopup();
processRoleFlow();
addChangeDurationPopup();
extendRolesFlow();
expireRolesFlow();
removeRolesFlow();
assignRolesFlow();
hideResetRoles();
toggleInputsDisabled();
toggleCursorPointerOnSearchInputs();
toggleStatus(
  'status-toggler',
  'status-active',
  'status-inactive',
  'status-string'
);
toggleStatus(
  'status-toggler-2',
  'status-active-2',
  'status-inactive-2',
  'status-string-2'
);
addTabClickListeners();
setupApplicationPopup();
editApplicationPopup();
manageApplicationPopup();
setupActivityHandlers();
setupActivityHandlers2();
addTabPersonaListeners();
activateCheckedRadio();
activateCheckedRadioList();
togglePersonaPopup();
addTabDashboardListeners();
toggleInviteButton();
checkInputsAndToggleButton('access-role-add', '_req-fill');
checkInputsAndToggleButton('external-role-add', '_req-external');
checkInputsAndToggleButton('edit-external-role-add', '_req-edit-external');
checkInputsAndToggleButton('edit-access-role-add', '_req-edit-access');
toggleAccessRolePopup();
toggleExternalRolePopup();
toggleEditsRolePopups(
  '#edit-access-role-popup',
  '.edit-access-trigger',
  '#edit-access-role-cancel',
  '#edit-access-role-add'
);
toggleEditsRolePopups(
  '#edit-external-role-popup',
  '.edit-external-trigger',
  '#edit-external-role-cancel',
  '#edit-external-role-add'
);

addErrorClassToElements();
showPassword('#password-login', '#password-login-show');
showPassword('#confirm-password-login', '#confirm-password-login-show');

// Function for testing error msg on Login error page
function hideLoginErrorMessage() {
  const closeButton = document.getElementById('error-message-close');
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) {
        errorMsg.classList.add('hidden');
      }
    });
  }
}

hideLoginErrorMessage();

initImageSlider();
