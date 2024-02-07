// Function validate empty string for demonstration

function inputError() {
  const submitBtn = document.querySelector('#submit-btn');
  const closeModalBtn = document.querySelector('#close-modal');
  const form_req = document.querySelector('._req');
  const inputName = document.querySelector('.group[data-te-input-notch-ref]');
  const inputLabel = document.querySelector('.name-label');
  const errorMsg = document.querySelector('.error-msg');
  const successMsg = document.querySelector('.success-msg');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (form_req.value === '') {
        inputName.classList.add('error');
        inputLabel.classList.add('error');
        errorMsg.classList.remove('hidden');
      } else {
        inputName.classList.remove('error');
        inputLabel.classList.remove('error');
        errorMsg.classList.add('hidden');
        successMsg.classList.remove('hidden');
        setTimeout(() => {
          successMsg.classList.add('hidden');
        }, 5000);
      }
    });

    closeModalBtn.addEventListener('click', () => {
      inputName.classList.remove('error');
      inputLabel.classList.remove('error');
      errorMsg.classList.add('hidden');
    });
  }
}

export default inputError;
