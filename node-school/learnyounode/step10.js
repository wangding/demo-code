var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  var d = new Date();
  socket.end(d.toLocaleDateString() + ' ' + d.toLocaleTimeString().slice(0, 5) + '\n');
});

server.listen(port);
