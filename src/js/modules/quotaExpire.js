function quotaExpire() {
  let expireToggler = document.getElementById('no-expire');
  if (expireToggler) {
    expireToggler.addEventListener('click', function () {
      var quotaInput = document.getElementById('quota-input');
      var quotaLabel = document.querySelector('#quota-input ~ label');
      if (quotaInput.hasAttribute('disabled')) {
        quotaInput.removeAttribute('disabled');
        quotaLabel.classList.remove('opacity-50');
      } else {
        quotaInput.setAttribute('disabled', 'disabled');
        quotaLabel.classList.add('opacity-50');
      }
    });
  }
}

export default quotaExpire;
