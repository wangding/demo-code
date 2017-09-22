#!/usr/bin/node
var http = require('http');
var url = require('url');

var msg = process.argv[2] || 'hello! I am wangding.';

var options = url.parse('http://localhost:8080');
options.method = 'POST';
console.log('OPTIONS: ', options);

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(err) {
  console.log('problem with request: ' + err.message);
});

// write data to request body
req.write(msg + '\n');
req.end();
