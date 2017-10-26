#!/usr/bin/node
// 02-unzip.js

var zlib = require('zlib'),
    fs = require('fs'),
    src = process.argv[2],
    dst = process.argv[3] || '';

dst = dst === '' ? src.slice(0, src.length-3) : dst;

fs.createReadStream(src).pipe(zlib.createUnzip()).pipe(fs.createWriteStream(dst));
