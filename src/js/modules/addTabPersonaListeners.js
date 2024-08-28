function addTabPersonaListeners() {
  const tabPlateBtn = document.getElementById('tab-plate-persona-btn');
  const tabListBtn = document.getElementById('tab-list-persona-btn');

  if (tabPlateBtn) {
    const activateButton = (button) => {
      tabPlateBtn.classList.remove('active');
      tabListBtn.classList.remove('active');
      button.classList.add('active');
    };

    tabPlateBtn.addEventListener('click', function () {
      document.getElementById('plate-tab-aside').click();
      activateButton(tabPlateBtn);
    });

    tabListBtn.addEventListener('click', function () {
      document.getElementById('list-tab-aside').click();
      activateButton(tabListBtn);
    });
  }
}

export default addTabPersonaListeners;
