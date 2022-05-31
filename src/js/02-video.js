// Vimeo Player
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

// loadash
var _ = require('lodash');

// track currentTime with throttle = 1 sec
player.on(
  'timeupdate',
  _.throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
      })
      .catch(function (error) {});
    console.log(localStorage);
  }, 1000),
);

// setting currentTime
const currentTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
