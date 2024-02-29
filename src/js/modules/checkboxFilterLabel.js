function checkboxFilterLabel(labelSelector, checkboxesSelecto) {
  const checkboxesLabel = document.querySelector(labelSelector);

  if (checkboxesLabel) {
    const checkboxes = document.querySelectorAll(checkboxesSelecto);
    var resetButton = document.getElementById('resetButton');

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

    resetButton.addEventListener('click', function () {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      checkboxesLabel.style.display = 'none';
    });
  }
}

export default checkboxFilterLabel;
