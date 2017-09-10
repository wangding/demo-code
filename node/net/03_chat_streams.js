var server = require('net').createServer();
var stream = require('stream');
var Transform = stream.Transform;

/// Create a room
var room = new stream.PassThrough();
///

function createRemoteInfoTransform(socket) {
  var out = new Transform();
 
  out.prefix = socket.remoteAddress + ':' + socket.remotePort;

  out._transform = function(buf, encoding, done) {
    this.push(out.prefix + ' > ' + buf);
    done();
  };

  return out;
}


server.on('connection', function(socket) {

  /// Plumbing
  var transformer = createRemoteInfoTransform(socket);

  socket.on('error', function() {
    console.log(transformer.prefix, 'has timed out');    
  });


  socket.pipe(transformer);

  // Split
  transformer.pipe(process.stdout);  
  transformer.pipe(room, { end: false }).pipe(socket);
  ///

  console.log('new connection from', transformer.prefix);

  socket.once('end', function() {
    console.log(transformer.prefix, 'disconnected');
  });

}).listen(8000, function() {
  console.log('TCP server is listening on port 8000');
});

