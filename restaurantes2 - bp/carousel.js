const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelector('.slides');

prevButton.addEventListener('click', () => {
  slides.style.transform = 'translateX(0)';
});

nextButton.addEventListener('click', () => {
  slides.style.transform = 'translateX(-25%)';
});
