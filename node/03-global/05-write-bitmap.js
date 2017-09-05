#!/usr/bin/node
// 05-write-bitmap.js

var fs = require('fs');
var width = 16;
var height = 16;
var pixelByteSize = width * height * 4;
var totalSize = pixelByteSize + 54;

/// create a buffer and populate it
var buffer = new Buffer(totalSize);

// See: http://en.wikipedia.org/wiki/BMP_file_format#Example_1
buffer.fill(0);
buffer.write('BM');
buffer.writeUInt32LE(totalSize, 0x02);      // size of bitmap file
buffer.writeUInt32LE(54, 0x0A);             // pixel data offset
buffer.writeUInt32LE(40, 0x0E);             // size of header
buffer.writeUInt16LE(1, 0x1A);              // color planes
buffer.writeUInt32LE(32, 0x1C);             // bits per color
buffer.writeUInt32LE(pixelByteSize, 0x22);  // total pixel size
buffer.writeInt32LE(width, 0x12);           // width
buffer.writeInt32LE(height, 0x16);          // height

for (var i=54; i<totalSize; i+=4) {
  buffer.writeUInt32LE(0xFF0000FF, i);      // write blue @ 100% opacity
}

fs.writeFile('./out.bmp', buffer, function(err) {
  if(err != null) {
    console.error(err);
    process.exit(2);
  }
});
