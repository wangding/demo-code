var fs = require('fs');
var http = require('http');
var path = process.argv[3];

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  fs.createReadStream(path).pipe(res);
});

server.listen(process.argv[2]);
