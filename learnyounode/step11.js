var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  console.log(req);
  console.log("\nXXXXXXXXXXXXXXXXXXXXX\n")
  console.log(res);
});

server.listen(process.argv[2]);
