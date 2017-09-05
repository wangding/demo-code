#!/usr/bin/node
// 05-event.js

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
/*
musicPlayer.on('error', function(err) {
  console.error(err);
});
*/
musicPlayer.emit('play');

setTimeout(function() {
  musicPlayer.emit('stop');
}, 2000);

setTimeout(function() {
  musicPlayer.emit('error', new Error('WRONG!'));
}, 3000);

process.on('uncaughtException', function(err) {
  console.error(err);
  process.exit(1);
});
