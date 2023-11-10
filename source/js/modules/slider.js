const initSlider = () => {
  const swiperEl = document.querySelector('[data-swiper]');
  const buttonPrev = document.querySelector('[data-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-slider-btn-next]');

  const swiper = new Swiper((swiperEl), {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1366: {
        slidePerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidePerView: 2,
        spaceBetween: 32,
      },
      0: {
        slidePerView: 1,
        spaceBetween: 0,
      },
    }
  })
}


// написать логику функции slideNext
// buttonNext.addEventListener('click', () => {
//   swiperEl.swiper.slideNext();
// });
// // написать логику функции slidePrev
// buttonPrev.addEventListener('click', () => {
//   swiperEl.swiper.slidePrev();
// });


export { initSlider }

