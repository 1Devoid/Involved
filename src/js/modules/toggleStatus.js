function toggleStatus() {
  const statusToggler = document.getElementById('status-toggler');

  if (statusToggler) {
    statusToggler.addEventListener('change', function () {
      let isChecked = this.checked;
      let activeElement = document.getElementById('status-active');
      let inactiveElement = document.getElementById('status-inactive');
      let statusString = document.getElementById('status-string');

      if (isChecked) {
        activeElement.classList.remove('hidden');
        inactiveElement.classList.add('hidden');
        statusString.textContent = 'Activate';
      } else {
        activeElement.classList.add('hidden');
        inactiveElement.classList.remove('hidden');
        statusString.textContent = 'Deactivate';
      }
    });
  }
}

export default toggleStatus;
