#!/usr/bin/node
// 03-http-server.js

var http = require('http');

http.createServer(function(req, res) {
  console.log(req.headers);
  console.log(req.url);

  for(var i=0; i<10; i++) res.write(i + '\n');
  setTimeout(function() {res.end('Hello World!\n');}, 2000);
}).listen(8080);
