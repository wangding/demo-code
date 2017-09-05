var server = require('net').createServer();

server.on('connection', function(stream) {
  stream.pipe(stream);
});

server.listen(8000, function() {
  console.log('listening on port 8000');
});
