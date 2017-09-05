var server = require('net').createServer();

server.on('connection', function(stream) {
  process.stdin.pipe(stream).pipe(process.stdout);
});

server.listen(8000, function() {
  console.log('listening on port 8000');
});
