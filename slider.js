// JavaScript for the slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth; // Width of each slide

let index = 0;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Previous slide
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

// Next slide
function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlidePosition();
}

// Add event listeners for previous and next buttons
document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Automatically advance the slider (optional)
function autoSlide() {
  nextSlide();
}
setInterval(autoSlide, 5000); // Change slide every 5 seconds
