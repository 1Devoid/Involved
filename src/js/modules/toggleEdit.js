function toggleEdit(msgSelector) {
  var editNodeBtn = document.getElementById('edit-node');
  var cancelNodeBtn = document.getElementById('cancel-node-btn');
  var addNodeBtn = document.getElementById('add-node-btn');
  var editBtns = document.getElementById('edit-btns');
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
export default toggleEdit;
