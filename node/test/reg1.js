#!/usr/bin/node

var assert = require('assert')

var regLeft = /^(\|)|\s+/

test(
    '去掉左侧第一个表格线',
    '|  | abc |',
    '  | abc |',
    '|  | abc |'.replace(regLeft, '')
    )

test(
    '去掉左侧多余的空格',
    '  | abc |',
    '| abc |',
    '  | abc |'.replace(regLeft, '')
    )

test(
    '去掉左侧多余的制表符',
    '\t\t\t| abc |',
    '| abc |',
    '\t| abc |'.replace(regLeft, '')
    )

test(
    '去掉左侧多余的空白字符',
    '\t  \t'
    )
function test(testCase, input, expect, actual) {
  console.log('案例：%s', testCase);
  console.log('输入：%s', input);
  console.log('预期：%s', expect);
  console.log('实际：%s', actual);
  console.log('测试: %s', (expect === actual) ? '通过' : '失败');
  console.log('----------------');
}
