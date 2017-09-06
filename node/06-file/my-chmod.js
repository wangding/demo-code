var fs = require('fs');

var mod = process.argv[2]
var src = process.argv[3];

fs.chmodSync(src, mod);


// usage:
//  touch a
//  ll
//  sudo node my-chmod.js '777' ./a 
//  ll
//  r 4, w 2, x 1

