#!/usr/bin/env node

const {readFileSync} = require('fs');

async function main() {
  const buf = new Uint8Array(readFileSync('./add.wasm'));
  const {add} = await WebAssembly.instantiate(buf)
    .then(res => res.instance.exports);
  console.log(add(2, 3));
}

main();
