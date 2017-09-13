#!/usr/bin/node

var cp = require('child_process');

cp.execFile('cat', ['01-exec-file.js'], function(err, stdout, stderr) {
  if(err) console.error(err);
  
  console.log(stdout);
});

