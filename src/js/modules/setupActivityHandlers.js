function setupActivityHandlers() {
  if (document.getElementById('add-new-activity')) {
    document
      .getElementById('add-new-activity')
      .addEventListener('click', function () {
        document
          .getElementById('new-activity-popup')
          .classList.remove('hidden');
      });

    document
      .getElementById('new-activity-cancel')
      .addEventListener('click', function () {
        document.getElementById('new-activity-popup').classList.add('hidden');
        document
          .getElementById('new-activity-error-msg')
          .classList.remove('hidden');
      });

    document
      .getElementById('new-activity-error-msg')
      .addEventListener('click', function () {
        document
          .getElementById('new-activity-error-msg')
          .classList.add('hidden');
      });

    document
      .getElementById('new-activity-submit')
      .addEventListener('click', function () {
        document.getElementById('new-activity-popup').classList.add('hidden');
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
