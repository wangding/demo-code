#!/usr/bin/env node

const axios = require('axios'),
      fs    = require('fs'),
      log   = console.log,
      baseURL = 'http://mp32b.ting89.com:9090/2021/13/元龙/';
      cfg = {
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
          'cookie': 'safedog-flow-item=256A1B916A675526351A726C45FFB925; UM_distinctid=179871d61a1563-00968463c469b-2363163-1fa400-179871d61a2837',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.9',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Referer': 'http://www.ting89.com/',
          'Upgrade-Insecure-Requests': '1'
        },
        responseType: 'stream'
      };

let num = 0, file = '', mp3URL = '', req = null, count = 1;

function Download(taskID) {
  let id = taskID;

  this.go = function(callback) {
    file   = id.toString().padStart(3, '0');
    mp3URL = encodeURI(`${baseURL}${file}.mp3`);

    //log(`${count} : ${mp3URL}`);

    axios.get(mp3URL, cfg).then((res) => {
      log(`download ${file}.mp3`);
      res.data.pipe(fs.createWriteStream(`./mp3/${file}.mp3`));
      res.data.on('end', ()=>{ callback(); });
    });
  }
}

function f2() {
  count++;

  if(count < 332) {
    let task = new Download(count);
    task.go(f2);
  }
  else {
    process.exit();
  }
}

let task0 = new Download(1);
task0.go(f2);
