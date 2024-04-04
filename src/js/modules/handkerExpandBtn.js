function handkerExpandBtn() {
  let button = document.getElementById('expand-nodes');
  if (button) {
    document
      .getElementById('expand-nodes')
      .addEventListener('click', function () {
        let nodes = document.querySelectorAll('.aside-node');

        nodes.forEach(function (node) {
          node.click();
          let svg = node.querySelector('svg:first-child');
          if (svg) {
            svg.classList.add('-rotate-90');
          }
        });
      });

    const svg1 = document.querySelector('#icon-expand');
    const svg2 = document.querySelector('#icon-collapse');
    // Встановлюємо початковий стан видимості SVG
    let isSvg1Visible = true;
    svg1.style.display = 'block';
    svg2.style.display = 'none';

    // Додаємо обробник події на клік по кнопці
    button.addEventListener('click', function () {
      if (isSvg1Visible) {
        svg1.style.display = 'none';
        svg2.style.display = 'block';
      } else {
        svg1.style.display = 'block';
        svg2.style.display = 'none';
      }
      isSvg1Visible = !isSvg1Visible; // Змінюємо стан видимості
    });
  }
}

export default handkerExpandBtn;
