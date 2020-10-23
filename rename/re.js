#!/usr/bin/env node

/*
 * 批量修改文件夹中的文件名
 */

const fs  = require('fs'),
      dir = process.argv[2],
      path= require('path'),
      log = console.log;

try {
  let files = fs.readdirSync(dir);

  for(let i=0; i<files.length; i++) {
    let str = files[i].match(/\d+/)[0];
    if(str.length < 4) {
      str = '0' + str;
    }

    str += '.mp3';

    let src = path.join(__dirname, process.argv[2], files[i]),
        dst = path.join(__dirname, process.argv[2], str);

    fs.renameSync(src, dst);
  }

} catch(err) {
  console.error(err.message);
  process.exit(1);
}
