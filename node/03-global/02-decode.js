#!/usr/bin/node
// 02-decode.js

var msg = process.argv[2];

var parseBasicAuth = function(encodedString) {
  var buffer = new Buffer(encodedString, 'base64');
  var parts = buffer.toString('utf8').split(':');

  return {
    username: parts[0],
    password: parts[1]
  };
};

var credentials = parseBasicAuth(msg);

console.log(credentials);

