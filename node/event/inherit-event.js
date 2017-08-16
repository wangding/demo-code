var event = require('event');
var util = require('util');

var AutoDevice = {
  play: function(track) {},
  stop: function() {}
}

function MusicPlayer() {
  this.playing = false;
  event.EventEmitter.call(this);
}

util.inherits(MusicPlayer, event.EventEmitter);

var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
 this.playing = true;
 AutoDevice.play(track);
});
