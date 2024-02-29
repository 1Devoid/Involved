function checkboxesCheckerManage() {
  const masterCheckbox = document.querySelector(
    '[data-checkbox="masterPopup"]'
  );

  if (masterCheckbox) {
    const checkboxes = document.querySelectorAll(
      '[data-checkbox="usersPopup"]'
    );

    masterCheckbox.addEventListener('click', function () {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = masterCheckbox.checked;
      });
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', function () {
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
      });
    });
  }
}

export default checkboxesCheckerManage;
