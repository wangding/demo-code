#!/usr/bin/node
// 02-my-gunzip.js

var zlib = require('zlib'),
    fs = require('fs'),
    assert = require('assert'),
    src = process.argv[2];

assert.notEqual(src, '', 'file name can not be null');

var dst = src.slice(0, src.length -3);

//fs.createReadStream(src).pipe(zlib.createUnzip()).pipe(fs.createWriteStream(dst));

var buf = fs.readFileSync(src);
/*
zlib.gunzip(buf, function(err, data) {
  console.log('%s size: %d byte', src, buf.length);
  console.log('%s size: %d byte', dst, data.length);
  fs.writeFileSync(dst, data);
});

var data = zlib.gunzipSync(buf);
var data = zlib.inflateSync(buf);

console.log('%s size: %d byte', src, buf.length);
console.log('%s size: %d byte', dst, data.length);
fs.writeFileSync(dst, data);

zlib.inflate(buf, function(err, data) {
  console.log('%s size: %d byte', src, buf.length);
  console.log('%s size: %d byte', dst, data.length);
  fs.writeFileSync(dst, data);
});
*/

fs.createReadStream(src).pipe(zlib.createInflate()).pipe(fs.createWriteStream(dst));
