document.querySelector('.menu__btn').onclick = function () {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
};

let slides = document.querySelectorAll('.carousel-slide');
let nextBtn = document.querySelector('.carousel-control.next');
let prevBtn = document.querySelector('.carousel-control.prev');
let currentSlide = 0;

let goToSlide = (n) => {
  slides[currentSlide].classList.toggle('active');  
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.toggle('active');
};

let nextSlide = () => {
  goToSlide(currentSlide + 1);
};

let prevSlide = () => {
  goToSlide(currentSlide - 1);
};

nextBtn.onclick = () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

prevBtn.onclick = () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
};

let slideInterval = setInterval(nextSlide, 3000);