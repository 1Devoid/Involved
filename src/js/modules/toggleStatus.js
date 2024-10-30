function toggleStatus(toggler, statusActive, statusInactive, string) {
  const statusToggler = document.getElementById(toggler);

  if (statusToggler) {
    statusToggler.addEventListener('change', function () {
      let isChecked = this.checked;
      let activeElement = document.getElementById(statusActive);
      let inactiveElement = document.getElementById(statusInactive);
      let statusString = document.getElementById(string);

      if (isChecked) {
        activeElement.classList.remove('hidden');
        inactiveElement.classList.add('hidden');
        statusString.textContent = 'Deactivate';
      } else {
        activeElement.classList.add('hidden');
        inactiveElement.classList.remove('hidden');
        statusString.textContent = 'Activate';
      }
    });
  }
}

export default toggleStatus;
