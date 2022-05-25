// loadash throttle
var _ = require('lodash');
var loadashthrottle = require('lodash.throttle');

// constants
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

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
