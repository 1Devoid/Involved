function addChangeDurationPopup() {
  if (document.getElementById('change-duration-popup')) {
    function toggleExpirationType() {
      var daysCheckbox = document.getElementById('change-duration-days');
      var expireDateWrap = document.getElementById(
        'change-duration-expire-date-wrap'
      );
      var expireTextWrap = document.getElementById(
        'change-duration-expire-text-wrap'
      );

      if (daysCheckbox.checked) {
        expireDateWrap.style.display = 'none';
        expireTextWrap.style.display = 'block';
      } else {
        expireDateWrap.style.display = 'block';
        expireTextWrap.style.display = 'none';
      }
    }

    document
      .getElementById('change-duration-days')
      .addEventListener('change', toggleExpirationType);

    var startDateInput = document.getElementById('change-duration-start-date');

    startDateInput.addEventListener('input', function () {
      var startDateValue = startDateInput.value;
      var parts = startDateValue.split('/');
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10) - 1;
      var year = parseInt(parts[2], 10);

      var inputDate = new Date(year, month, day, 0, 0, 0, 0);
      var currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      const inputDateDelegation = document.querySelector(
        '#change-duration-start-date ~ .group[data-te-input-notch-ref]'
      );
      const inputLabel = document.querySelector(
        '#change-duration-start-date-label'
      );
      const errorMsg = document.querySelector(
        '#change-duration-start-date-error'
      );
      if (inputDate >= currentDate) {
        inputDateDelegation.classList.remove('error');
        inputLabel.classList.remove('error');
        errorMsg.classList.add('hidden');
      } else {
        inputDateDelegation.classList.add('error');
        inputLabel.classList.add('error');
        errorMsg.classList.remove('hidden');
      }
    });
  }
}

export default addChangeDurationPopup;
