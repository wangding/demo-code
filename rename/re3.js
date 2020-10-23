#!/usr/bin/env node

/*
 * 递归批量修改文件夹中的文件名：
 *
 * 原始文件名：10 服务器域名【瑞客论坛 www.ruike1.com】.mp4
 * 目标文件名：10 服务器域名.mp4
 */

const fs  = require('fs'),
      path= require('path');

reFilesInDir(__dirname);

function reFilesInDir(dir) {
  console.log(`\ndir: ${dir}`);

  let files = fs.readdirSync(dir, { withFileTypes: true });

  for(let i=0; i<files.length; i++) {
    let file = files[i];

    if(file.isFile()) {
      if(file.name.indexOf('【瑞客论坛 www.ruike1.com】') >= 0) {
        let src = path.join(dir, file.name),
            dst = path.join(dir, file.name.replace('【瑞客论坛 www.ruike1.com】', ''));

        console.log(`src: ${src}\ndst: ${dst}`);
        fs.renameSync(src, dst);
      }
    } else if(file.isDirectory()) {
      reFilesInDir(path.join(dir, file.name));
    } else {
      return;
    }
  }
}
