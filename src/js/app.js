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
import { Datepicker, Input, initTE } from 'tw-elements';

initTE({ Datepicker, Input });
dropdownInit();
popupInit();
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
arrowRotateInput('#dropdownButton-appRole-2', '#dropdown-appRole-2');
arrowRotateInput('#dropdownButton-profileNode', '#dropdown-profileNode');
arrowRotateInput(
  '#dropdownButton-profileHomeNode',
  '#dropdown-profileHomeNode'
);
trimString('[data-trim16]', 16);
trimString('[data-trim20]', 20);
trimString('[data-trim34]', 34);
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
  '[data-checkbox="entitlement-label"]',
  '[data-checkbox="entitlement"]'
);
checkboxFilterLabel(
  '[data-checkbox="status-label"]',
  '[data-checkbox="status"]'
);
