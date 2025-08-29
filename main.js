import "./assets/scss/all.scss";
import 'bootstrap/dist/js/bootstrap.min.js';

// 下拉選單的 icon 變化效果
const dropdownEl = document.getElementById("productList");
const iconEl = document.getElementById("dropdownIcon");

dropdownEl.addEventListener("show.bs.dropdown", () => {
  iconEl.textContent = "keyboard_arrow_up";
});

dropdownEl.addEventListener("hide.bs.dropdown", () => {
  iconEl.textContent = "keyboard_arrow_down";
});

// Swiper 動畫效果
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
