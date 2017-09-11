#!/usr/bin/node
var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

process.stdin.on('data', function(data) {
  var line = data.toString('utf8');
  socket.send(line, 0, line.length, 8080, '192.168.130.144');
});
