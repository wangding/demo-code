var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  var total = '';

  req.setEncoding('utf-8');
  req.on('data', function(data) {
    total += data;
  });

  req.on('end', function() {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(total.toUpperCase());
  });

});

server.listen(process.argv[2]);
