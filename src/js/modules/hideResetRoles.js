function hideResetRoles() {
  const resetButtonRoles = document.getElementById('resetButton-roles');

  if (resetButtonRoles) {
    function checkResetRoles() {
      const removeRolesLabel = document.querySelector(
        '[data-filter="remove-roles-label"]'
      );
      const expireRolesLabel = document.querySelector(
        '[data-filter="expire-roles-label"]'
      );
      const resetRoles = document.getElementById('reset-roles');

      if (
        removeRolesLabel &&
        expireRolesLabel &&
        resetRoles &&
        resetButtonRoles
      ) {
        if (
          parseInt(removeRolesLabel.textContent) === 0 &&
          parseInt(expireRolesLabel.textContent) === 0
        ) {
          resetRoles.classList.add('hidden');
          resetButtonRoles.classList.add('hidden');
        } else {
          resetRoles.classList.remove('hidden');
          resetButtonRoles.classList.remove('hidden');
        }
      }
    }

    document
      .getElementById('reset-remove-roles')
      .addEventListener('click', checkResetRoles);
    document
      .getElementById('reset-expire-roles')
      .addEventListener('click', checkResetRoles);
  }
}

export default hideResetRoles;
