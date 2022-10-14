import {fb} from './build/release.wasm';

console.time('WASM');
console.log(fb(40000000));
console.timeEnd('WASM');
