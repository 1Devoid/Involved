function checkboxesCheckerRoles() {
  const masterCheckbox = document.querySelector(
    '[data-checkbox="masterRoles"]'
  );

  if (masterCheckbox) {
    const checkboxes = document.querySelectorAll('[data-checkbox="subRoles"]');
    const removeBtn = document.getElementById('remove-roles-btn');
    const expireBtn = document.getElementById('expire-roles-btn');
    const extendBtn = document.getElementById('extend-roles-btn');

    removeBtn.style.display = 'none';
    expireBtn.style.display = 'none';
    extendBtn.style.display = 'none';

    masterCheckbox.addEventListener('click', function () {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = masterCheckbox.checked;
      });
      if (!masterCheckbox.checked) {
        removeBtn.style.display = 'none';
        expireBtn.style.display = 'none';
        extendBtn.style.display = 'none';
        checkboxes.forEach((checkbox) => {
          checkbox.closest('tr').classList.remove('checked-tr');
        });
      } else {
        removeBtn.style.display = 'flex';
        expireBtn.style.display = 'flex';
        extendBtn.style.display = 'flex';
        checkboxes.forEach((checkbox) => {
          checkbox.closest('tr').classList.add('checked-tr');
        });
      }
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
          checkbox.closest('tr').classList.add('checked-tr');
        } else {
          checkbox.closest('tr').classList.remove('checked-tr');
        }
        masterCheckbox.checked = [...checkboxes].every(
          (checkbox) => checkbox.checked
        );
      });
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const atLeastOneChecked = [...checkboxes].some(
          (checkbox) => checkbox.checked
        );
        if (atLeastOneChecked) {
          removeBtn.style.display = 'flex';
          expireBtn.style.display = 'flex';
          extendBtn.style.display = 'flex';
        } else {
          removeBtn.style.display = 'none';
          expireBtn.style.display = 'none';
          extendBtn.style.display = 'none';
        }
      });
    });
  }
}

export default checkboxesCheckerRoles;
