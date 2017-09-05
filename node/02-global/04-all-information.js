#!/usr/bin/node
// 04-all-information.js

console.log('architecture:', process.arch);
console.log('platform:', process.platform);

console.log('process id:', process.pid);
console.log('execPath:', process.execPath);
/*
process.stdin.resume();
setTimeout(function() {
  console.log('only wait 5 second.');
}, 5000);
*/

console.log('node version:', process.version);
console.log('user id:', process.getuid());
console.log('group id:', process.getgid());
console.log('cwd:', process.cwd());

console.log('rss:', process.memoryUsage().rss);
console.log('heapTotal:', process.memoryUsage().heapTotal);
console.log('heapUsed:', process.memoryUsage().heapUsed);
console.log('external:', process.memoryUsage().external);

console.log('cpu usage:', process.cpuUsage());
console.log('release:', process.release);
console.log('\nconfig:', process.config);
console.log('\nenvironment:', process.env);
console.log('host name:', process.env.HOSTNAME);
