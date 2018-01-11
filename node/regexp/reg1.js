#!/usr/bin/node


var reg = /^\s*\|/

test(
    '去掉左侧第一个表格线',
    '  | abc |',
    ' abc |',
    '  | abc |'.replace(reg, '')
    )

test(
    '去掉左侧第一个表格线',
    '| abc | def |',
    ' abc | def |',
    '| abc | def |'.replace(reg, '')
    )

test(
    '去掉左侧第一个表格线',
    '|  | abc |',
    '  | abc |',
    '|  | abc |'.replace(reg, '')
    )

test(
    '去掉左侧多余的空格',
    '  | abc |',
    '| abc |',
    '  | abc |'.replace(reg, '')
    )

test(
    '去掉左侧多余的制表符',
    '\t\t\t| abc |',
    '| abc |',
    '\t\t\t| abc |'.replace(reg, '')
    )

test(
    '去掉左侧多余的空白字符',
    '\t  \t| abc |',
    '| abc |',
    '\t  \t| abc |'.replace(reg, '')
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
