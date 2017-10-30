#!/usr/bin/node
// 01-my-gzip.js

var zlib = require('zlib'),
    fs = require('fs'),
    assert = require('assert'),
    src = process.argv[2];

assert.notEqual(src, '', 'file name can not be null');
var dst = src + '.gz';

//fs.createReadStream(src).pipe(zlib.createGzip()).pipe(fs.createWriteStream(dst));

var buf = fs.readFileSync(src);

zlib.gzip(buf, function(err, data) {
  console.log('%s size: %d byte', src, buf.length);
  console.log('%s size: %d byte', dst, data.length);
  fs.writeFileSync(dst, data);
});
