function toggleStatus() {
  const statusToggler = document.getElementById('status-toggler');

  if (statusToggler) {
    statusToggler.addEventListener('change', function () {
      let isChecked = this.checked;
      let activeElement = document.getElementById('status-active');
      let inactiveElement = document.getElementById('status-inactive');

      if (isChecked) {
        activeElement.classList.remove('hidden');
        inactiveElement.classList.add('hidden');
      } else {
        activeElement.classList.add('hidden');
        inactiveElement.classList.remove('hidden');
      }
    });
  }
}

export default toggleStatus;
