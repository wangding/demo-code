var fs = require('fs');

var file = process.argv[2];

console.log(fs.readFileSync(file).toString('utf8'));
