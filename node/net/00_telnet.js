if (process.argv < 3) { return console.log('Usage: node 00_telnet.js host:port'); }

var net = require('net');
var readline = require('readline');
var stream = require('stream');
var host = process.argv[2].split(':');
var cli = readline.createInterface(process.stdin, process.stdout);

var socket = net.connect({ host : host[0], port : host[1] }, function() {
 
  console.log('connected to', host[0], 'on port', host[1]);

  /// Bind socket to readline and vice versa  
  cli.setPrompt('$ ');
  cli.prompt();
  cli.on('line', function(line) {
   socket.write(line + '\r\n');
  });

  var transformer = new stream.Transform();
  transformer._transform = function(buf, encoding, done) {
    this.push(buf);
    cli.prompt();
    done();
  };

  socket.pipe(transformer).pipe(process.stdout);

  socket.on('end', function() {
    console.log('disconnected from server');
    process.exit();
  });
  ///
});

socket.on('error', function(err) {
  console.log('ERROR:', err.message);
});
