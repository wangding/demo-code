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
    var sub = files[i].substr(6, 3);
    if(sub === '的录音') {
      var data = files[i].match(/\d+/g);

      if(data.length === 4) {
        dst  = '2019-' + data[0] + '-' + data[1] + '-' + data[2] + '.mp3';
      }

      if(data.length === 3) {
        dst  = '2019-' + data[0] + '-' + data[1] + '.mp3';
      }

      fs.renameSync(files[i], dst);
    }
  }
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
