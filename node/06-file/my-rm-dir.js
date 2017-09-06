var fs = require('fs');

var src = process.argv[2];

if(fs.statSync(src).isDirectory())  fs.rmdirSync(src);
