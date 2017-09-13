#!/usr/bin/node

var cp = require('child_process');

cp.exec('cat messy.txt | sort | uniq', function(err, stdout, stderr) {
  console.log(stdout);
});
