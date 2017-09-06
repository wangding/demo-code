var fs = require('fs');

var uid = process.argv[2];
var gid = process.argv[3];

var file = process.argv[4];

fs.chownSync(file, Number(uid), Number(gid));

// usage:
//   cat /etc/passwd 查到 root uid=0, gid=0
//   touch a
//   ll
//   sudo chown root:root a
//   ---
//   sudo ./my-chown.js 0 0 a
