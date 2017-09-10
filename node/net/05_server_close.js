var server = require('net').createServer(function(socket) {
  socket.pipe(socket);
});
server.listen(8000, function() {
  console.log('server is listening');
});

server.once('close', function() {
  console.log('server is closed');
  clearInterval(interval);
});

/// Track connections
var count = 10;
var interval = setInterval(function() {
  console.log(count);
  if (count === 0) {
    console.log('shutting down...');
    server.close();
  }
  server.getConnections(function(err, connections) {
    if (connections) {
      console.log('server connections:', connections);
    }
  });
  count --;
}, 1000);
///
