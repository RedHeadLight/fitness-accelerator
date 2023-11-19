const initVideo = () => {
  const video = document.querySelector('.video');
  if (video) {
    const videoPlayBtn = video.querySelector('.video__play-button');
    videoPlayBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      video.classList.add('video--active');
    });
  }
};

export {initVideo};
