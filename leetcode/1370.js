#!/usr/bin/env node

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let nums = s.split(''),
      keys = null,
      min  = 0,
      max  = 0,
      out  = false,
      res  = [];

  function filter() {
    for(let i=1; i>0;) {
      if(keys[i] === keys[i-1]) {
        keys.splice(i, 1);
      } else {
        i++;
        if(i >= keys.length) {
          break;
        }
      }
    }
  }

  function stepMin() {
    if(out) return;

    let pos = nums.indexOf(min);
    if(pos !== -1) {
      res.push(min);
      nums.splice(pos, 1);
      let p = keys.indexOf(min);
      if(p === -1 || p+1 === keys.length) {
        out = true;
      } else {
        min = keys[p+1];
      }
    }
  }

  function stepMax() {
    if(out) return;

    let pos = nums.indexOf(max);
    if(pos !== -1) {
      res.push(max);
      nums.splice(pos, 1);
      let p = keys.indexOf(max);
      if(p === -1 || p-1 <0) {
        out = true;
      }else{
        max = keys[p-1];
      }
    }
  }

  for(; nums.length>0;) {
    keys = [...nums];
    keys.sort();
    filter();
    out = false;

    min = keys[0];
    max = keys[keys.length -1];
    out = 0;

    stepMin();
    stepMin();
    stepMin();
    out = false;

    stepMax();
    stepMax();
    stepMax();
  }

  return res.join('');
};

console.log(sortString('aaaabbbbcccc'));
//sortString('rat');
//sortString('leetcode');
//sortString('ggggggg');
//sortString('spo');
