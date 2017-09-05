#!/usr/bin/node
// 04-bitmap-header.js

var fs = require('fs');

fs.readFile('./nodejs-logo.bmp', function(err, buffer) {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  // See: http://en.wikipedia.org/wiki/BMP_file_format#Example_1
  if (buffer.toString('ascii', 0, 2) === 'BM') {
    console.log('width:', buffer.readInt32LE(0x12));
    console.log('height:', Math.abs(buffer.readInt32LE(0x16)));
    console.log('color depth:', buffer.readUInt16LE(0x1C));
  }
});
