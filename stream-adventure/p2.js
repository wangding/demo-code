var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);

//console.log(process.argv[2]);
