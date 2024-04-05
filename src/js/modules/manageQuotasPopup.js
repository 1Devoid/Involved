function manageQuotasPopup() {
  if (document.getElementById('edit-quotas-popup')) {
    function showQuotasPopup() {
      document.getElementById('edit-quotas-popup').style.display = 'none';
      document.getElementById('quotas-popup').style.display = 'flex';
    }

    function showEditQuotasPopup() {
      document.getElementById('edit-quotas-popup').style.display = 'flex';
      document.getElementById('quotas-popup').style.display = 'none';
    }

    document
      .getElementById('quotasBtn')
      .addEventListener('click', showQuotasPopup);

    let editQuotaButtons = document.querySelectorAll('.edit-quota');
    editQuotaButtons.forEach(function (button) {
      button.addEventListener('click', showEditQuotasPopup);
    });

    document
      .getElementById('quotas-edit-close')
      .addEventListener('click', function () {
        document.getElementById('edit-quotas-popup').style.display = 'none';
        document.getElementById('quotas-popup').style.display = 'flex';
      });
    document
      .getElementById('quotas-close')
      .addEventListener('click', function () {
        document.getElementById('quotas-popup').style.display = 'none';
      });
  }
}

export default manageQuotasPopup;
