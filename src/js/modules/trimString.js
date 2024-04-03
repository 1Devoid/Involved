function trimString(selector, num) {
  const strings = document.querySelectorAll(selector);
  if (strings) {
    strings.forEach(function (element) {
      let text = element.innerText;

      if (text.length > num) {
        element.innerText = text.substring(0, num) + '...';
      } else {
        return text;
      }
    });
  }
}

export default trimString;
