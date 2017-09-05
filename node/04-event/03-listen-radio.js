#!/usr/bin/node
// 03-listen-radio.js

var Radio = require('./03-radio');

var station = {
  freq: '80.16',
  name: 'Rock & Roll Radio'
};

var radio = new Radio(station);

radio.on('open', function(station) {
  console.log('"%s" FM %s 打开', station.name, station.freq);
  console.log('♫♫♫♫♫♫');
});

radio.on('open', function(station) {
  console.log(radio.eventNames());
  console.log(radio.listenerCount('open'));
  console.log(radio.listeners('open'));
  console.log('hello:', station);
});


radio.on('stop', function(station) {
  console.log('"%s" FM %s 关闭', station.name, station.freq);
});
