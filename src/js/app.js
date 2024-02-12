import dropdownInit from './modules/dropdown.js';
import popupInit from './modules/popup.js';
import inputInit from './modules/input.js';
import inputError from './modules/inputError.js';
import asideNavToggler from './modules/asideNav.js';
import darkThemeToggler from './modules/darkTheme.js';
import arrowRotateInput from './modules/arrowRotateInput.js';

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
