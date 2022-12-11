#!/usr/bin/env node

const fs  = require('fs'),
      dir = process.argv[2],
      path= require('path'),
      log = console.log;

try {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    let src = path.join(__dirname, dir, file);
    let dst = path.basename(file, '.mkv').split('-').slice(0,-2).join('-');
    dst = path.join(__dirname, dir, dst + '.mkv');
    fs.renameSync(src, dst);
  });
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
