#!/usr/bin/node

var http = require('http'),
    url  = require('url');

http.createServer(function(req, res) {
  console.log('start request:', req.url);
  var options = url.parse(req.url);
  options.headers = req.headers;

  var proxyRequest = http.request(options, function(proxyResponse) {
    proxyResponse.on('data', function(chunk) {
      console.log('proxyResponse length:', chunk.length);
      res.write(chunk, 'binary');
    });

    proxyResponse.on('end', function() {
      console.log('proxied request ended');
      res.end();
    });

    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
  });

  req.on('data', function(chunk) {
    console.log('in request length:', chunk.length);
    proxyRequest.write(chunk, 'binary');
  });

  req.on('end', function() {
    console.log('original request ended');
    proxyRequest.end();
  });
}).listen(8080);
