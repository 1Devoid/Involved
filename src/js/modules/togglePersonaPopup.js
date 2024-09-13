function togglePersonaPopup() {
  if (document.getElementById('personaButton')) {
    document
      .getElementById('personaButton')
      .addEventListener('click', function () {
        document.getElementById('persona-popup').classList.remove('hidden');
      });

    document
      .getElementById('persona-continue')
      .addEventListener('click', function () {
        document.getElementById('persona-popup').classList.add('hidden');
      });

    document
      .getElementById('persona-logout')
      .addEventListener('click', function () {
        document.getElementById('persona-popup').classList.add('hidden');
      });
    document
      .getElementById('persona-cancel')
      .addEventListener('click', function () {
        document.getElementById('persona-popup').classList.add('hidden');
      });
  }
}

export default togglePersonaPopup;
