function toggleEdit() {
  var editNodeBtn = document.getElementById('edit-node');
  if (editNodeBtn) {
    var editBtns = document.getElementById('edit-btns');

    if (editNodeBtn.style.display === 'none') {
      editNodeBtn.style.display = 'flex';
      editBtns.style.display = 'none';
    } else {
      editNodeBtn.style.display = 'none';
      editBtns.style.display = 'flex';
    }
  }
}
export default toggleEdit;
