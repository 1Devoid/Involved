function checkboxFilterLabel(labelSelector, checkboxesSelecto) {
  const checkboxesLabel = document.querySelector(labelSelector);

  if (checkboxesLabel) {
    const checkboxes = document.querySelectorAll(checkboxesSelecto);

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
  }
}

export default checkboxFilterLabel;
