#!/usr/bin/node
// 03-static-http-server-advanced.js

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
      sendFile(req, res, fileName);
    }
  });
}).listen(8080);

function sendFile(req, res, fileName) {
  if(req.headers["accept-encoding"]) {
    res.setHeader('Content-Encoding', 'gzip');
    fs.createReadStream(fileName).pipe(zlib.createGzip()).pipe(res);
  } else {
    fs.createReadStream(fileName).pipe(res);
  }
}

// 实现了对请求头的判断，可以压缩也可以不压缩，取决于客户端的情况
