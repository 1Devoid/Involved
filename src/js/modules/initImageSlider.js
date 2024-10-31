function initImageSlider() {
  const images = document.querySelectorAll('.login-img');

  // Перевіряємо, чи знайдено зображення
  if (images.length === 0) return;

  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000);
}
export default initImageSlider;
