#!/usr/bin/env node

const fs = require('fs');

let buf = new Uint8Array(256);

for(let i=0; i<256; i++) buf[i] = i;

fs.writeFileSync('data.bin', buf, 'binary');
