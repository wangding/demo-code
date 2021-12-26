#!/usr/bin/env node

//pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - ...

const n = Number(process.argv[2]) | 10000;
let pi = 3;

for(let i=2; i<n; ) {
  pi += Math.pow(-1, i/2 + 1) * 4/(i*(i+1)*(i+2));
  i += 2;
}

console.log(pi);
