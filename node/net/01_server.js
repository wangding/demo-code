#!/usr/bin/node
var server = require('net').createServer();
var fs = require('fs');

server.on('connection', function(socket) {
  console.log('new connection from', socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('readable', function() {
    var data, data_prev;
    while(data = socket.read()) {
      process.stdout.write(socket.remoteAddress + ':' + socket.remotePort + ' > ' + data);
      data_prev = data;
    }

    var cmd = data_prev.slice(0, data_prev.length-2);

    switch(cmd) {
      case 'ls':
        var files = fs.readdirSync(__dirname);
        files.forEach(function(f) {
          socket.write(f + '\r\n');
        });
        break;

      case 'quit':
        server.close();
        process.exit(0);

      default:
        break;
    }
  });

  socket.once('end', function() {
    console.log(socket.remoteAddress, 'disconnected');
  });
}).listen(8080, function() {
  console.log('TCP server is listening on port 8080');
});
