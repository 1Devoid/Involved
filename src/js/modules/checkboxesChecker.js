function checkboxesChecker() {
  const masterCheckbox = document.querySelector('[data-checkbox="master"]');

  if (masterCheckbox) {
    const checkboxes = document.querySelectorAll('[data-checkbox="users"]');
    const deleteBtn = document.getElementById('deleteBtn');

    deleteBtn.style.display = 'none';

    masterCheckbox.addEventListener('click', function () {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = masterCheckbox.checked;
      });
      if (!masterCheckbox.checked) {
        deleteBtn.style.display = 'none';
        checkboxes.forEach((checkbox) => {
          checkbox.closest('tr').classList.remove('checked-tr');
        });
      } else {
        deleteBtn.style.display = 'flex';
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
          deleteBtn.style.display = 'flex';
        } else {
          deleteBtn.style.display = 'none';
        }
      });
    });

    deleteBtn.addEventListener('click', () => {
      deleteBtn.style.display = 'none';
      const checkboxes = document.querySelectorAll('[data-checkbox="users"]');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    });
  }
}

export default checkboxesChecker;
