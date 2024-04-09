function handlerExpandBtn() {
  let buttonExpand = document.getElementById('btn-expand');
  let buttonCollapse = document.getElementById('btn-collapse');
  let nodes = document.querySelectorAll('.aside-node');

  if (buttonExpand) {
    buttonExpand.addEventListener('click', function () {
      buttonExpand.classList.add('hidden');
      buttonCollapse.classList.remove('hidden');
      nodes.forEach(function (node) {
        if (node.getAttribute('aria-expanded') === 'true') {
          return node;
        } else {
          node.click();
          let svg = node.querySelector('svg:first-child');
          svg.classList.add('-rotate-90');
        }
      });
    });
  }
  if (buttonCollapse) {
    buttonCollapse.addEventListener('click', function () {
      buttonExpand.classList.remove('hidden');
      buttonCollapse.classList.add('hidden');
      nodes.forEach(function (node) {
        if (node.getAttribute('aria-expanded') === 'false') {
          return node;
        } else {
          node.click();
          let svg = node.querySelector('svg:first-child');
          svg.classList.remove('-rotate-90');
        }
      });
    });
  }
}

export default handlerExpandBtn;
