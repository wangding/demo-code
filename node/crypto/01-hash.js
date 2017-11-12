#!/usr/bin/node
// 01-hash.js

var crypto = require('crypto'),
    fs = require('fs');

var hash = crypto.createHash('sha1');
var rs = fs.createReadStream(__filename);

rs.on('data', function(chunk) {
  hash.update(chunk);
});

rs.on('end', function() {
  console.log(hash.digest('binary'));
});

//rs.pipe(hash).pipe(process.stdout);
