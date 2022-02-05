function fb(n) {
  if(n===1 || n===2) {
    return 1;
  } 
  return fb(n-1) + fb(n-2);
}

console.time('fb执行时间');
let result = fb(43);
console.timeEnd('fb执行时间');
self.postMessage('worker3');
