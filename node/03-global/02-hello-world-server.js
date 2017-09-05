#!/usr/bin/node
// 02-hello-world-server.js

var fs = require('fs');
var http = require('http');

var mime = 'image/jpg';
var data = fs.readFileSync('./nodejs-logo.jpg').toString('base64');
var uri = 'data:' + mime + ';base64,' + data;
var html = '<!DOCTYPE html>\n<html>\n<body>\n<img alt="nodejs" src="' + uri + '">\n</body>\n</html>'

http.createServer(function(req, res) {
  console.log(req.headers);
  console.log(req.url);
  res.end(html);
}).listen(8080);
