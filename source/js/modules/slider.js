const initSlider = () => {
  const swiperEl = document.querySelector('[data-swiper]');
  const buttonPrev = document.querySelector('[data-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-slider-btn-next]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  return swiper;
};

export {initSlider};
