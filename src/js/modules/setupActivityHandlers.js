function setupActivityHandlers() {
  if (document.getElementById('new-activity-submit')) {
    document
      .getElementById('new-activity-submit')
      .addEventListener('click', function () {
        document.getElementById('skeleton').classList.remove('hidden');

        setTimeout(function () {
          document.getElementById('skeleton').classList.add('hidden');
          document
            .getElementById('new-activity-success-msg')
            .classList.remove('hidden');

          setTimeout(function () {
            document
              .getElementById('new-activity-success-msg')
              .classList.add('hidden');
          }, 3000);
        }, 3000);
      });
  }
}

export default setupActivityHandlers;
