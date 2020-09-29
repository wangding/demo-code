#!/usr/bin/env node

const axios = require('axios'),
      fs    = require('fs'),
      url   = require('url'),
      log   = console.log;

async function getKey() {
  const pageURL = 'http://shuting5.com/js/player/play.php?url=YVKMTYwMTM0MjE3NT15b3VzaGVuZy8yOTYwNi9wbGF5XzI5NjA2XzE0Ny5odG1ZVks=&from=china&s=/py/100542-0-146.html&x=/py/100542-0-148.html';
  res = await axios.get(pageURL);
  res = res.data;

  let pos = res.search('mp3:') + 5;
  res = res.slice(pos, res.length);
  pos = res.search('"');

  let mp3URL = res.slice(0, pos);
  return url.parse(mp3URL).query;
}

async function getMP3() {
  const baseURL = 'http://t33.tingchina.com/yousheng/武侠小说/紫阳/(*).mp3';

  let key = await getKey();

  let mp3URL = encodeURI(`${baseURL}?${key}`);

  log(mp3URL);
}

getMP3();
