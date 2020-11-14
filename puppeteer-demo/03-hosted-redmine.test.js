#!/usr/bin/env node

describe('hosted redmine 测试', () => {
  beforeAll(async () => {
    await page.goto('http://www.hostedredmine.com/login');
    await page.type('#username', 'test_2016_1');
    await page.type('#password', 'Passw0rd!');
    await Promise.all([
      page.waitForNavigation(),
      page.click('input[name=login]')
    ]);
    await page.waitForSelector('img.gravatar+span.flat-menu__label');
  });

  it('should be titled "我的工作台 - HostedRedmine by Planio"', async () => {
    await expect(page.title()).resolves.toMatch('我的工作台 - HostedRedmine by Planio');
  });

  it('should contain "顶"', async () => {
    let text = await page.$eval('img.gravatar+span.flat-menu__label', e => e.innerText);
    expect(text).toMatch(/顶/);
  });
});
