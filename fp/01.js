const {
  map,
  match,
  filter,
  reduce,
  split,
} = require('./support');

const assert = require('assert');

// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

const words = split(' ');

assert.arrayEqual(
  words('Jingle bells Batman smells'),
  ['Jingle', 'bells', 'Batman', 'smells'],
  'The function gives incorrect results.',
);

assert(
  split.partially,
  'The answer is incorrect; hint: split is currified!',
);

// 练习 1a
//==============
// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组

const sentences = list => map(words, list);

console.log(sentences(['hello world', 'good morning']));
/*
assert.arrayEqual(
  sentences(['hello world', 'good morning']),
  [['hello', 'world'], ['good', 'morning']],
  'The function gives incorrect results.',
);
*/

// 练习 2
//==============
// 通过局部调用（partial apply）移除所有参数

const filterQs = filter(match(/q/i));

assert.arrayEqual(
  filterQs(['quick', 'camels', 'quarry', 'over', 'quails']),
  ['quick', 'quarry', 'quails'],
  'The function gives incorrect results.',
);

assert(
  filter.partially,
  'The answer is incorrect; hint: look at the arguments for `filter`.',
);

assert(
  match.partially,
  'The answer is incorrect; hint: look at the arguments for `match`.',
);

// 练习 3
//==============
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数

// 无须改动:
const _keepHighest = (x, y) => x >= y ? x : y;

// 重构这段代码:
const max = reduce(_keepHighest, -Infinity);

assert(
  max([323, 523, 554, 123, 5234]) === 5234,
  'The function gives incorrect results.',
);

assert(
  reduce.partially,
  'The answer is incorrect; hint: look at the arguments for `reduce`!',
);

/*
assert(
  _keepHighest.calledBy && _keepHighest.calledBy.name === '$reduceIterator',
  'The answer is incorrect; hint: look closely to `reduce\'s` iterator and `keepHighest`!',
);
*/

// 彩蛋 1:
// ============
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
const slice = undefined;


// 彩蛋 2:
// ============
// 借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。
const take = undefined;
