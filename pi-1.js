#!/usr/bin/env node

//pi = 4/1-4/3+4/5-4/7+4/9-4/11+4/13-4/15+4/17-...

let pi = 0;

for(let i=1; i<100; ) {
  pi += Math.pow(-1, i+1) * 4/i;
  i += 2;
}

console.log(pi);
