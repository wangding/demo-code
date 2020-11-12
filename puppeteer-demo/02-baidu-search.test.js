#!/usr/bin/env node

describe('百度搜索', () => {
  beforeAll(async () => {
    await page.goto('https://www.baidu.com');
    await page.type('#kw', 'selenium');
    await Promise.all([
      page.waitForNavigation(),
      page.click('#su')
    ]);
    await page.waitForSelector('.nums_text');
  });

  it('should be titled "Selenium_百度搜索"', async () => {
    await expect(page.title()).resolves.toMatch('selenium_百度搜索');
  });

  it('should contain "百度为您找到相关结果约"', async () => {
    let text = await page.$eval('.nums_text', e => e.innerText);
    expect(text).toMatch(/百度为您找到相关结果约/);
  });
});
