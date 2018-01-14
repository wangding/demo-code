#!/usr/bin/node

var assert = require('assert')

var reg = /t+est/i

assert.ok(reg.test('test'), '可以匹配')
assert.ok(reg.test('Test'), '可以忽略大小写')
assert.ok(reg.test('ttest'), '可以匹配')
assert.ok(reg.test('abc'), '不能匹配')

