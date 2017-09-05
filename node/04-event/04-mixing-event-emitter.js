#!/usr/bin/node
// 04-mixing-event-emitter.js
// 1. mixing event emitter
// 2. managing errors
// 3. categorizing event name
//    var e = MusicPlayer.events = {
//      play: 'play',
//      stop: 'stop',
//      error: 'error'
//    }

var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
  this.track = track;
  this.playing = false;

  for(var methodName in EventEmitter.prototype) {
    console.log(methodName);
    this[methodName] = EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype = {
  toString: function() {
    if(this.playing) {
      return 'Now Playing: ' + this.track;
    } else {
      return 'Stopped';
    }
  }
};

var musicPlayer = new MusicPlayer('Girl Talk - Still Here');

musicPlayer.on('play', function() {
  this.playing = true;
  console.log('\n', this.toString());
});

musicPlayer.on('stop', function() {
  this.playing = false;
  console.log('\n', this.toString());
});

// managing errors 
musicPlayer.on('error', function(err) {
  console.error(err);
});

musicPlayer.emit('play');

setTimeout(function() {
  musicPlayer.emit('stop');
}, 2000);

setTimeout(function() {
  musicPlayer.emit('error', new Error('WRONG!'));
}, 3000);

