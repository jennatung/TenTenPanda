import './assets/scss/all.scss';

console.log('Hello world');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  initialSlide: 3,
  centeredSlides: true,
  spaceBetween: 12,
  breakpoints: {
    992: {
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
