#!/usr/bin/node
// 01-zip.js

var zlib = require('zlib'),
    fs = require('fs'),
    src = process.argv[2],
    dst = process.argv[3] || '';

dst = dst === '' ? src + '.gz' : dst;

//fs.createReadStream(src).pipe(zlib.createGzip()).pipe(fs.createWriteStream(dst));

var buf = fs.readFileSync(src);
zlib.gzip(buf, function(err, data) {
  console.log('%s size: %d byte', src, buf.length);
  console.log('%s size: %d byte', dst, data.length);
  fs.writeFileSync(dst, data);
});
