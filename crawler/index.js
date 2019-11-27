#!/usr/bin/node

const http    = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('crawler'),
      iconv   = require('iconv-lite'),
      addr    = 'https://www.ysx8.net/Yshtml/Ys21321.html';

http.get(addr, (res) => {
  var result = [],
      len    = 0;

  res.on('data', (data) => {
    result.push(data);
    len += data.length;
  });

  res.on('end', () => {
    var html = iconv.decode(Buffer.concat(result, len), 'gb2312');
    //print(html);

    var $ = cheerio.load(html);
    $('body').find('li>a').each(function(){
      //print(iconv.decode($(this).text(), 'gb2312'));
      log('http://177h.tt56w.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/%E8%87%B3%E5%B0%8A%E4%BB%99%E7%9A%87/' + $(this).attr('title'));
      /*
      var cName = $(this).find('.card-title>a').text(),
          cURL  = $(this).find('.card-title>a').attr('href');

      cURL = 'https://segmentfault.com' + cURL;

      if(cName === '') return;

      log('课程名称：', cName);
      log('课程网址：', cURL.trim());
      log('');
      */
    });
  });
});
