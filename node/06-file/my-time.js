var fs = require('fs');

var src = process.argv[3];
var time = process.argv[2];

console.log(time);
var t = Date.parse(time);
console.log(t);  
//var d = new Date(Date.parse(time));
//console.log(d.toLocaleDateString());
//console.log(d.toLocaleTimeString());
fs.utimesSync(src, t, t); 

// usage:
//  touch a
//  ll
//  stat a
//  touch -t 201505050101.20 a            YYYYMMDDHHMM.SS
//  ./my-time.js 201708080101.20 a
//  stat a

