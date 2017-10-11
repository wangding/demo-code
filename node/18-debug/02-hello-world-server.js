#!/usr/bin/node
// 02-hello-world-server.js

var http = require('http');

http.createServer(function(req, res) {
  console.log(req.headers);
  console.log('');

  res.end('Hello World!');
}).listen(8080);

process.on('uncaughtException', function(err) {
  console.log(err);
});
