#!/usr/bin/node
// 06-standard-input-output.js
// useage:
//   ctrl + d  结束输入

var me = {};
var i = 1;

var msg = ["name",
           "email",
           "QQ",
           "mobile"];

//console.log(msg[0] + ':');
process.stdout.write(msg[0] + ':');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function(data) {
  var cmd = 'me.' + msg[i-1] + ' = "' + data.slice(0, data.length-1) + '"';

  eval(cmd);
  //console.log(msg[i++] + ':');
  process.stdout.write(msg[i++] + ':');
});
/*
process.stdin.on("end", function(data) {
  console.log(me);
})
*/
