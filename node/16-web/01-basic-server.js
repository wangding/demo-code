#!/usr/bin/node
// 01-basic-server.js

var http = require('http');

http.createServer(function(req, res) {
  console.log(req.headers);
  res.end('Hello World!');
}).listen(8080);
