var Readable = require('stream').Readable;

var stream = new Readable();

stream.push('wang\n');
stream.push('ding\n');
stream.push(null);

stream.pipe(process.stdout);
