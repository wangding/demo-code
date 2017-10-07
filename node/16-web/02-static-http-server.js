#!/usr/bin/node
// 02-static-http-server.js

var http = require('http');
var fs = require('fs');

var www = __dirname + '/' + process.argv[2];
console.log('www:', www);

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  console.log('')
  console.log('URL:', url);
  console.log(req.headers);

  var fileName = www + req.url;
  fs.createReadStream(fileName).pipe(res);
}).listen(8000);
