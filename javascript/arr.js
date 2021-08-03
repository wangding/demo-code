/*
 * 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 */
let arr = [];

function fn() {
  let n = Math.floor(Math.random() * 100) % 33;

  if( (n > 1) && (arr.indexOf(n) === -1) ) {
    arr.push(n);
    if(arr.length === 5) {
      return;
    } else {
      fn();
    }
  } else {
    fn();
  }
}

fn();
console.log(arr);
