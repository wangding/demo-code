function fb2(n) {
  let x = 1, y = 1, z = 0;
  let out = [];

  while(z <= n){
    z = x + y;
    x = y;
    y = z;
    out.push(z);
  }

  return out;
}

console.time('JS');
console.log(fb2(40000000).length);
console.timeEnd('JS');
