#!/usr/bin/node
// 02-static-http-server-stream.js

var http = require('http');
var fs = require('fs');

// method: stream model

http.createServer(function(req, res) {
  console.log('===');
  console.log(req.headers);

  var fileName = __dirname + req.url;
  var stream = fs.createReadStream(fileName);
  
  stream.on('error', function(err) {
    console.trace();
    console.log('');

    console.error('stack:', err.stack);
    console.log('');

    console.error(err);
    res.end(err.message);
  });

  stream.pipe(res);
}).listen(8080);
