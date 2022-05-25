const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// track currentTime
player.on('timeupdate', function () {
  this.getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {});
  console.log(localStorage);
});

// setting currentTime
player.on('play', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  this.setCurrentTime(currentTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
});
