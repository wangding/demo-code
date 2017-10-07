#!/usr/bin/node
// 01-basic-server.js

var http = require('http');

http.createServer(function(req, res) {
  // step 2
  var body = 'hello world!';

  res.statusCode = 404;
  res.setHeader('Content-Length', body.length);
  res.setHeader('Content-Type', 'text/plain');
  
  // step 1
  console.log(req.headers);
  //res.end('Hello World!');
  res.end(body);
}).listen(8080);
