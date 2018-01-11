#!/usr/bin/node


var reg = /(?=.*[a-z])\d+/

test(
    '精确匹配',
    '1a',
    'MMa',
    '1a'.replace(reg, 'MM')
    )

test(
    '精确匹配',
    'a1',
    'a1',
    'a1'.replace(reg, 'MM')
    )

test(
    '精确匹配',
    '1a1',
    'MMa1',
    '1a1'.replace(reg, 'MM')
    )

function test(testCase, input, expect, actual) {
  var chalk = require('chalk');
  var log = console.log;

  log('案例：%s', testCase);
  log('输入：%s', input);
  log('预期：%s', expect);
  log('实际：%s', actual);
  log('测试: ' + ((expect === actual) ? 
      chalk.greenBright('通过') : 
      chalk.redBright('失败')));

  log(chalk.gray('----------------'));
}
