#!/usr/bin/node
// 03-static-http-server.js

var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    zlib = require('zlib');

var www = process.argv[2] || 'www';

var root = path.isAbsolute(www) ? www : path.join(__dirname, www);

console.log('root:', root);

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  console.log('URL:', url);
  console.log(req.headers);
  console.log('');

  var fileName = root + req.url;
  fs.stat(fileName, function(err, stat) {
    if(err) {
      if('ENOENT' === err.code) {
        res.statusCode = 404;
        res.end(fileName + ' NOT FOUND!');
      } else {
        res.statusCode = 500;
        res.end(err.message);
      }
    } else {
      //res.setHeader('Content-Length', stat.size);
      //res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Encoding', 'gzip');
      fs.createReadStream(fileName).pipe(zlib.createGzip()).pipe(res);
    }
  });
}).listen(8080);
