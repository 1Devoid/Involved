function addTabClickListeners() {
  const tabTreeBtn = document.getElementById('tab-tree-btn');
  const tabListBtn = document.getElementById('tab-list-btn');

  if (tabTreeBtn) {
    const activateButton = (button) => {
      tabTreeBtn.classList.remove('active');
      tabListBtn.classList.remove('active');
      button.classList.add('active');
    };

    tabTreeBtn.addEventListener('click', function () {
      document.getElementById('roles-tab-aside').click();
      activateButton(tabTreeBtn);
    });

    tabListBtn.addEventListener('click', function () {
      document.getElementById('details-tab-aside').click();
      activateButton(tabListBtn);
    });
  }
}

export default addTabClickListeners;
