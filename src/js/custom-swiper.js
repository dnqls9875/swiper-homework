const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  effect: "coverflow",
  slidesPerView: 4,
  centeredSlides: true,
  mousewheel: true,
  spaceBetween: 60,
  parallax: true,
  speed: 1500,
  loop: false,
  coverflowEffect: {
    rotate: 45,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    2300: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    2900: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});
