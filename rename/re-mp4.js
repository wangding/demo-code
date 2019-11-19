#!/usr/bin/node

/*
 * 批量修改文件夹中的文件名
 */

const fs  = require('fs'),
      path= require('path'),
      log = console.log;

try {
  var files = fs.readdirSync(__dirname);

  for(var i=0; i<files.length; i++) {
    var pre = files[i].substr(0, 2);
    if(pre === '录制') {
      fs.renameSync(files[i], files[i].substring(3, files[i].length));
    }
  }
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
