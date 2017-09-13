#!/usr/bin/node

var cp = require('child_process');

var arg = [];
arg.push(__filename);

var child = cp.spawn('cat', arg);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

/*
var cat = cp.spawn('cat', ['messy.txt']);
var sort = cp.spawn('sort');
var uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
*/
