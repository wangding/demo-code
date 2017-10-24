#!/usr/bin/node

var cp = require('child_process'),
    cmd = '',
    arg = [];

if(typeof process.argv[2] === 'undefined') {
  cmd = 'cat';
  arg.push(__filename);
} else {
  cmd = process.argv[2];
  arg = process.argv.slice(3, process.argv.length);
}

console.log('I am father process. PID:', process.pid);

cp.execFile(cmd, arg, function(err, stdout, stderr) {
  if(err) console.error(err);
  
  console.log(stdout);
});
