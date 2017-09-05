#!/usr/bin/node
// 08-signal.js
// usage:
//   ./08-signal.js
//   ctrl+Z
//   Ctrl+C
//   ./08-signal.js
//   kill -2 {pid}  same as ctrl-c
//   kill -INT {pid} same as ctrl-c
//   kill -20 {pid}  same as ctrl-z

console.log('process id:', process.pid);

process.stdin.resume();

process.on('SIGINT', function() {
  console.log('you press ctrl+c, good bye!');
  process.exit(0);
});

process.on('SIGTSTP', function() {
  console.log('you press ctrl+z, stop running!'); 
})
