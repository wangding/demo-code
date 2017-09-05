#!/usr/bin/node
// 01-static-http-server.js

// method: normal model

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  console.log('=====');
  console.log(req.headers);
  var fileName = __dirname + req.url;
  fs.readFile(fileName, function(err, data) {
    if(err) {
      console.log(err.message);
      res.statusCode = 500;
      res.end(err.message);
    } else {
      res.end(data);
    }
  })
}).listen(8080);

// usage:
//   
//   ok!
//
//   curl http://192.168.174.144:8080/01-static-http-server.js
//   firefox url-above
//
//   not ok!
//
//   curl http://192.168.174.144:8080/a.html
//   firefox url-above

