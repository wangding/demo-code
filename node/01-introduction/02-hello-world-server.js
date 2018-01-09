#!/usr/bin/node
// 02-hello-world-server.js

const http = require('http');

http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url);
  res.end('Hello World!');
}).listen(8080);
