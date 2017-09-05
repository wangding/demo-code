var fs = require('fs');

var file = process.argv[2];

fs.stat(file, console.log);
