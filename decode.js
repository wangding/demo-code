const de = require('lean-he/decode'),
      fs = require('fs'),
      src= process.argv[2],
      dst= process.argv[3];

let data = fs.readFileSync(src).toString('utf8');
fs.writeFileSync(dst, de(data));
