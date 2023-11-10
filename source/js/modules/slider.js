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
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
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

