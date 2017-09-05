var fs = require('fs');

src = process.argv[2];
dst = process.argv[3];

fs.createReadStream(src).pipe(fs.createWriteStream(dst));
