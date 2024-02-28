import dropdownInit from './modules/dropdown.js';
import popupInit from './modules/popup.js';
import inputInit from './modules/input.js';
import inputError from './modules/inputError.js';
import asideNavToggler from './modules/asideNav.js';
import darkThemeToggler from './modules/darkTheme.js';
import arrowRotateInput from './modules/arrowRotateInput.js';
import trimString from './modules/trimString.js';

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
arrowRotateInput('#dropdownButton-appRole', '#dropdown-appRole');
arrowRotateInput('#dropdownButton-profileNode', '#dropdown-profileNode');
arrowRotateInput(
  '#dropdownButton-profileHomeNode',
  '#dropdown-profileHomeNode'
);
trimString('[data-trim16]', 16);
trimString('[data-trim20]', 20);
trimString('[data-trim34]', 34);
