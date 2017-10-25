#!/usr/bin/node
// 01-static-http-server.js

var http = require('http'),
    fs = require('fs');

var root = __dirname + '/' + (process.argv[2] || 'www');

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  console.log(req.headers);
  console.log('');

  var fileName = root + req.url;
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
