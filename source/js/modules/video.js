let videoPlay = document.getElementById('video-play'),
    videoBox = document.getElementById('video-box');

videoPlay.addEventListener('click', function() {
  if (videoBox.paused) {
    videoBox.play();
    videoBox.playbackRate = 2;
    videoPlay.classList.remove('modal__video-play');
  } else {
    videoBox.pause();
    videoPlay.classList.add('modal__video-play');
    videoBox.load();
  };
})
