const { sqrt } = require('mathjs')

//console.log(sqrt(-4).toString())

const {create, all} = require('mathjs')

const math = create(all)

math.import({
  myvalue: 42,
  hello: function (name) {
    return 'hello, ' + name + '!'
  }
})

//console.log(math.hello('wangding'))

const arr = [];
for(let i=0; i<256; i++) {
  arr[i] = i;
}

const buf = Buffer.from(arr);

//console.log(buf);
const str = buf.toString('ascii');
console.log(str.length);
for(let i=0; i<str.length; i++) {
  console.log(i, str.charCodeAt(i), str[i]);
}
