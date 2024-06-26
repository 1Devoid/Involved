function checkboxFilterLabel(labelSelector, checkboxesSelecto) {
  const checkboxesLabel = document.querySelector(labelSelector);

  if (checkboxesLabel) {
    const checkboxes = document.querySelectorAll(checkboxesSelecto);
    const processRoleReset = document.getElementById('process-role-reset');
    const resetButton = document.getElementById('resetButton');
    const resetButton2 = document.getElementById('resetButton-2');
    const resetButton3 = document.getElementById('resetButton-3');
    const resetButton4 = document.getElementById('resetButton-4');
    const resetButton5 = document.getElementById('resetButton-5');
    const resetButton6 = document.getElementById('resetButton-6');
    const resetButton7 = document.getElementById('resetButton-7');
    const resetButton8 = document.getElementById('resetButton-8');
    const resetButton9 = document.getElementById('resetButton-9');
    const resetButton10 = document.getElementById('resetButton-10');
    const resetButton11 = document.getElementById('resetButton-11');
    const resetButton12 = document.getElementById('resetButton-12');
    const resetButton13 = document.getElementById('resetButton-13');
    const resetButton14 = document.getElementById('resetButton-14');
    const resetButton15 = document.getElementById('resetButton-15');

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

          const radioGroups = document.querySelectorAll('input[type="radio"]');

          radioGroups.forEach((radio) => {
            const radioGroup = document.querySelectorAll(
              `input[name="${radio.name}"]`
            );

            if (radioGroup.length > 0) {
              radioGroup[0].checked = true;
            }
          });
        });
      }
    }
    reset(processRoleReset);
    reset(resetButton);
    reset(resetButton2);
    reset(resetButton3);
    reset(resetButton4);
    reset(resetButton5);
    reset(resetButton6);
    reset(resetButton7);
    reset(resetButton8);
    reset(resetButton9);
    reset(resetButton10);
    reset(resetButton11);
    reset(resetButton12);
    reset(resetButton13);
    reset(resetButton14);
    reset(resetButton15);
  }
}

export default checkboxFilterLabel;
