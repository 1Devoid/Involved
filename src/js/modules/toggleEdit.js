function toggleEdit(msgSelector) {
  let editNodeBtn = document.getElementById('edit-node');
  let cancelNodeBtn = document.getElementById('cancel-node-btn');
  let addNodeBtn = document.getElementById('add-node-btn');
  let editBtns = document.getElementById('edit-btns');
  let inputsForEdit = document.querySelectorAll('.input-for-edit');
  let editMsg = document.getElementById(msgSelector);

  if (editNodeBtn) {
    editNodeBtn.addEventListener('click', () => {
      editNodeBtn.style.display = 'none';
      inputsForEdit.forEach((input) => {
        input.classList.add('edit-color');
      });
      editBtns.style.display = 'flex';
    });

    cancelNodeBtn.addEventListener('click', () => {
      editNodeBtn.style.display = 'flex';
      inputsForEdit.forEach((input) => {
        input.classList.remove('edit-color');
      });
      editBtns.style.display = 'none';
    });

    addNodeBtn.addEventListener('click', () => {
      editNodeBtn.style.display = 'flex';
      inputsForEdit.forEach((input) => {
        input.classList.remove('edit-color');
      });
      editBtns.style.display = 'none';
      editMsg.classList.remove('hidden');
      setTimeout(() => {
        editMsg.classList.add('hidden');
      }, 2000);
    });
  }
}

function toggleRelationshipsEdit(msgSelector) {
  let editNodeBtn = document.getElementById('relationship-edit-node');
  let cancelNodeBtn = document.getElementById('cancel-relationship-node-btn');
  let addNodeBtn = document.getElementById('add-relationship-node-btn');
  let editBtns = document.getElementById('relationship-edit-btns');
  let inputsForEdit = document.querySelectorAll('.input-for-edit');
  let editMsg = document.getElementById(msgSelector);
  let expireToggler = document.getElementById('relationship-nodes-no-expire');
  let expireTogglerWrap = document.getElementById(
    'relationship-nodes-expire-wrap'
  );
  let quotaInput = document.getElementById('relationship-nodes-expire-input');
  let quotaLabel = document.querySelector(
    '#relationship-nodes-expire-input ~ label'
  );
  if (editNodeBtn) {
    editNodeBtn.addEventListener('click', () => {
      expireTogglerWrap.classList.remove('hidden');
      editNodeBtn.style.display = 'none';
      inputsForEdit.forEach((input) => {
        input.classList.add('edit-color');
      });
      editBtns.style.display = 'flex';
    });

    if (expireToggler) {
      expireToggler.addEventListener('click', function () {
        if (quotaInput.hasAttribute('disabled')) {
          quotaInput.removeAttribute('disabled');
          quotaLabel.classList.remove('opacity-50');
          console.log(1);
        } else {
          quotaInput.setAttribute('disabled', 'disabled');
          quotaLabel.classList.add('opacity-50');
        }
      });
    }

    cancelNodeBtn.addEventListener('click', () => {
      editNodeBtn.style.display = 'flex';
      expireTogglerWrap.classList.add('hidden');
      inputsForEdit.forEach((input) => {
        input.classList.remove('edit-color');
      });
      editBtns.style.display = 'none';
    });

    addNodeBtn.addEventListener('click', () => {
      editNodeBtn.style.display = 'flex';
      expireTogglerWrap.classList.add('hidden');
      inputsForEdit.forEach((input) => {
        input.classList.remove('edit-color');
      });
      editBtns.style.display = 'none';
      editMsg.classList.remove('hidden');
      setTimeout(() => {
        editMsg.classList.add('hidden');
      }, 2000);
    });
  }
}
export { toggleEdit, toggleRelationshipsEdit };
