#!/usr/bin/node
var server = require('net').createServer();
var fs = require('fs');

server.on('connection', function(socket) {
  console.log('new connection from', socket.remoteAddress);
  console.log(socket.remoteFamily);

  socket.setEncoding('utf8');

  socket.on('readable', function() {
    var data, data_prev;
    while(data = socket.read()) {
      process.stdout.write(socket.remoteAddress + ':' + socket.remotePort + ' > ' + data);
      data_prev = data;
    }

    var cmd = data_prev.slice(0, data_prev.length-1);

    switch(cmd) {
      case 'ls':
        console.log('ok');
        var files = fs.readdirSync(__dirname);
        files.forEach(function(f) {
          socket.write(f);
        });
        break;

      default:
        break;
    }
  });

  socket.once('end', function() {
    console.log(socket.remoteAddress, 'disconnected');
  });
}).listen({port:8080, host:'192.168.174.144'}, function() {
  console.log('TCP server is listening on port 8080');
});
