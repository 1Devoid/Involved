function addDelegatePopup() {
  if (document.getElementById('add-delegate-popup')) {
    function toggleExpirationFields() {
      let noExpireCheckbox = document.getElementById('delegate-no-expire');
      let expireDateField = document.getElementById('delegate-expire-date');
      let expireTextField = document.getElementById('delegate-expire-text');
      let expireDateBtn = document.querySelector(
        '#delegate-expire-date ~ button'
      );
      let togglers = document.getElementById('delegate-togglers');

      if (noExpireCheckbox.checked) {
        expireDateField.disabled = true;
        expireTextField.disabled = true;
        expireDateBtn.disabled = true;
        togglers.classList.add('opacity-50');
      } else {
        expireDateField.disabled = false;
        expireTextField.disabled = false;
        expireDateBtn.disabled = false;
        togglers.classList.remove('opacity-50');
      }
    }

    document
      .getElementById('delegate-no-expire')
      .addEventListener('change', toggleExpirationFields);

    function toggleExpirationType() {
      var daysCheckbox = document.getElementById('delegate-days');
      var expireDateWrap = document.getElementById('delegate-expire-date-wrap');
      var expireTextWrap = document.getElementById('delegate-expire-text-wrap');

      if (daysCheckbox.checked) {
        expireDateWrap.style.display = 'none';
        expireTextWrap.style.display = 'block';
      } else {
        expireDateWrap.style.display = 'block';
        expireTextWrap.style.display = 'none';
      }
    }

    document
      .getElementById('delegate-days')
      .addEventListener('change', toggleExpirationType);

    var startDateInput = document.getElementById('delegate-start-date');

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
        '#delegate-start-date ~ .group[data-te-input-notch-ref]'
      );
      const inputLabel = document.querySelector('#delegate-start-date-label');
      const errorMsg = document.querySelector('#delegate-start-date-error');
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

export default addDelegatePopup;
