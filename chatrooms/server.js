#!/usr/bin/node
// 02-static-http-server.js

var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    cache = {};

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  //console.log('URL:', url);
  //console.log(req.headers);
  //console.log('');

  var fileName = (req.url === '/') ? path.join(__dirname, 'www/index.html') : path.join(__dirname, 'www', req.url);
  //console.log('fileName:', fileName);

  fs.stat(fileName, function(err, stat) {
    if(err) {
      if('ENOENT' === err.code) {
        send404(res);
      } else {
        res.statusCode = 500;
        res.end(err.message);
      }
    } else {
      //console.log(cache);
      if(!cache[fileName]) cache[fileName] = fs.readFileSync(fileName); 
      sendFile(res, fileName, cache[fileName]);
    }
  });
}).listen(8080);

function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Error 404: resource not found.');
}

function sendFile(res, file, fileContents) {
  //console.log('sendFile function, file:', file);
  //console.log('sendFile function, fileContents:', fileContents);

  res.writeHead(200, {
    'Content-Type': mime.getType(path.basename(file)),
    'Content-Length': Buffer.byteLength(fileContents)
  });
  
  res.end(fileContents);
}

