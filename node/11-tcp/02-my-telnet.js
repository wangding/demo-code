#!/usr/bin/node
if (process.argv.length < 4) { return console.log('Usage:\n\t./02-my-telnet.js host port'); }

var net = require('net');

var host = process.argv[2];
var port = process.argv[3];

var socket = net.connect({ host : host, port : port }, function() {
 
  console.log('connected to', host[0], 'on port', host[1]);

  process.stdin.on('data', function(data) {
    var line = data.toString('utf8');
    line = line.slice(0, line.length-1) + '\r\n';
    socket.write(line);
  });

  socket.pipe(process.stdout);
});

socket.on('end', function() {
  console.log('disconnected from server');
  process.exit();
});

socket.on('error', function(err) {
  console.log('ERROR:', err.message);
});
