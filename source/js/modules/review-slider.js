const renderSlider = () => {
  const swiperEl = document.querySelector('[data-review-swiper]');
  const buttonPrev = document.querySelector('[data-review-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-review-slider-btn-next]');

  const swiper = new Swiper((swiperEl), {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  })
}

export {renderSlider}
