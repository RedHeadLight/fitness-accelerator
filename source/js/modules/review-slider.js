const renderSlider = () => {
  const swiperEl = document.querySelector('[data-review-swiper]');
  const buttonPrev = document.querySelector('[data-review-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-review-slider-btn-next]');
next
  const swiper = new Swipper((swiperEl), {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
      slidesPerView: 1,
    },

    // // breakpoints: {
    // //   0: {
    // //     slidesPerView: 1,
    // //   },
    // //   768: {
    // //     slidesPerView: 1,
    // //   },
    // //   1366: {
    // //     slidesPerView: 1,
    // //   },
    // }
  })
}

export {renderSlider}
