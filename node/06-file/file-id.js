var fs = require('fs');

console.log('hello console');
process.stdout.write('hello stdout\n');
fs.writeSync(1, 'hello fs-id\n');
