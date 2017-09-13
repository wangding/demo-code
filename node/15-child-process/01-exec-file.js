#!/usr/bin/node

var cp = require('child_process');

cp.execFile('ls', ['-l'], function(err, stdout, stderr) {
  if(err) console.error(err);
  
  console.log(stdout);
});

