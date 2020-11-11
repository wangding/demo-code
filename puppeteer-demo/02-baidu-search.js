#!/usr/bin/env node

if(process.version.slice(1,3) < 10) {
  console.log(`nodejs 版本：${process.version}`);
  console.log('node.js 版本必须大于等于 10');
  process.exit(1);
}

const assert = require('assert');
const puppeteer = require('puppeteer');

(async () => {
  let browser = null;

  if(process.platform === 'linux') {
    browser = await puppeteer.launch();
  } else {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    });
  }

  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  await page.type('#kw', 'selenium');
  await Promise.all([
    page.waitForNavigation(),
    page.click('#su')
  ]);

  await page.waitForSelector('.nums_text');
  assert.equal(await page.title(), 'selenium_百度搜索');
  let text = await page.$eval('.nums_text', e => e.innerText);
  assert.ok(/百度为您找到相关结果约/.test(text));

  await browser.close();
})();
