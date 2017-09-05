#!/usr/bin/node
// 01-static-http-server-stream.js

// method: normal model

var http = require('http');
var fs = require('fs');

// method: stream model

http.createServer(function(req, res) {
  console.log('===');
  console.log(req.headers);

  var fileName = __dirname + req.url;
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
