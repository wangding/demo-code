/* es2020 matchAll */

let str = 'hello world';
let reg = /l/g;

let res = str.match(reg);

console.log(res);

let res2 = str.matchAll(reg);

for(let r of res2) {
    console.log(r);
}
