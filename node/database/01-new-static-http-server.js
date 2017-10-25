#!/usr/bin/node
// 01-static-http-server.js

var http = require('http'),
    fs = require('fs'),
    buf = {};

var root = __dirname + '/' + (process.argv[2] || 'www');

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  console.log(req.headers);
  console.log('');

  var fileName = root + req.url;
  sendFile(res, fileName);
}).listen(8080);

function sendFile(res, fileName) {
  //console.log(buf);
  //console.log('');

  if(!buf[fileName]) { buf[fileName] = fs.readFileSync(fileName); }

  res.end(buf[fileName]);
}
