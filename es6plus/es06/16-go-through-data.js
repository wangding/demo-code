#!/usr/bin/env node

const log = console.log;

/* es6 iterator 遍历自定义数据 */

const banji = {
  name: '终极一班',
  member: [
    'xiaoming',
    'xiaoli',
    'xiaowang',
    'xiaosun',
    'xiaotong'
  ],
  [Symbol.iterator]() {
    let index = 0,
        _this = this;

    return {
      next() {
        let res;

        if(index < _this.member.length) {
          res = { value: _this.member[index++], done: false};
        } else {
          res = { value: undefined, done: true};
        }
        return res;
      }
    };
  }
}

// 遍历班级对象，放回班级成员信息
for(let v of banji) log(v);
