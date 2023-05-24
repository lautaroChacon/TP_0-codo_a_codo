const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelector('.slides');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + 4) % 4;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 4;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});