function addTabDashboardListeners() {
  const tabPlateBtn = document.getElementById('tab-plate-dashboard-btn');
  const tabListBtn = document.getElementById('tab-list-dashboard-btn');

  if (tabPlateBtn) {
    const activateButton = (button) => {
      tabPlateBtn.classList.remove('active');
      tabListBtn.classList.remove('active');
      button.classList.add('active');
    };

    tabPlateBtn.addEventListener('click', function () {
      document.getElementById('dashboard-plate-tab-aside').click();
      activateButton(tabPlateBtn);
    });

    tabListBtn.addEventListener('click', function () {
      document.getElementById('dashboard-list-tab-aside').click();
      activateButton(tabListBtn);
    });
  }
}

export default addTabDashboardListeners;
