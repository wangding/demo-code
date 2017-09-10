var server = require('net').createServer();
var stream = require('stream');
var Transform = stream.Transform;

/// Add a transform stream
function createRemoteInfoTransform(socket) {
  var out = new Transform({ decodeStrings: 'utf8' });
 
  out.prefix = socket.remoteAddress + ':' + socket.remotePort;

  out._transform = function(buf, encoding, done) {
    this.push(out.prefix + ' > ' + buf);
    done();
  };

  return out;
}
///

server.on('connection', function(socket) {

  /// Use socket.pipe
  var transformer = createRemoteInfoTransform(socket);

  socket.pipe(transformer).pipe(process.stdout);
  ///

  console.log('new connection from', transformer.prefix);

  socket.once('end', function() {
    console.log(transformer.prefix, 'disconnected');
  });

}).listen(8000, function() {
  console.log('TCP server is listening on port 8000');
});
