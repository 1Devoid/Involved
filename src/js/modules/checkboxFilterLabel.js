function checkboxFilterLabel(labelSelector, checkboxesSelecto) {
  const checkboxesLabel = document.querySelector(labelSelector);

  if (checkboxesLabel) {
    const checkboxes = document.querySelectorAll(checkboxesSelecto);
    const resetButton = document.getElementById('resetButton');
    const resetButton2 = document.getElementById('resetButton-2');
    const resetButton3 = document.getElementById('resetButton-3');

    checkboxesLabel.style.display = 'none';

    function countCheckedCheckboxes() {
      let count = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          count++;
        }
      });
      return count;
    }
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const count = countCheckedCheckboxes();
        checkboxesLabel.innerText = count;
        if (count === 0) {
          checkboxesLabel.style.display = 'none';
        } else {
          checkboxesLabel.style.display = 'block';
        }
      });
    });

    function reset(resetButton) {
      if (resetButton) {
        resetButton.addEventListener('click', function () {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
          });
          checkboxesLabel.style.display = 'none';
        });
      }
    }
    reset(resetButton);
    reset(resetButton2);
    reset(resetButton3);
  }
}

export default checkboxFilterLabel;
