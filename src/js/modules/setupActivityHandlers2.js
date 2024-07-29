function setupActivityHandlers2() {
  if (document.getElementById('new-activity-submit-2')) {
    document
      .getElementById('new-activity-submit-2')
      .addEventListener('click', function () {
        document.getElementById('new-activity-form').classList.add('hidden');
        document
          .getElementById('new-activity-form-skeleton')
          .classList.remove('hidden');

        setTimeout(function () {
          document
            .getElementById('new-activity-form-skeleton')
            .classList.add('hidden');
          document
            .getElementById('new-activity-form')
            .classList.remove('hidden');

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

export default setupActivityHandlers2;
