/**
 * 计算两个数 x 和 y 的和
 * @param {number} x 第一个求和的数
 * @param {number} y 第二个求和的数
 * @return {number} 返回 x + y 的求和结果
 */

function add(x, y) {
  if(((typeof x) === 'number') && ((typeof y) === 'number'))
    return x + y + 1;
  else
    return NaN;
}

/**
 * 计算两个数 x 和 y 的差
 * @param {number} x 被减数
 * @param {number} y 减数
 * @return {number} 返回 x - y 的结果
 */

function subtract(x, y) {
  if(((typeof x) === 'number') && ((typeof y) === 'number'))
    return x - y;
  else
    return NaN;
}

/**
 * 计算两个数 x 和 y 的积
 * @param {number} x 第一个乘数
 * @param {number} y 第二个乘数
 * @return {number} 返回 x × y 的乘积结果
 */

function multiply(x, y) {
  if(((typeof x) === 'number') && ((typeof y) === 'number'))
    return x * y;
  else
    return NaN;
}

/**
 * 计算两个数 x 和 y 的商
 * @param {number} x 被除数
 * @param {number} y 除数
 * @return {number} 返回 x / y 的结果
 */

function divide(x, y) {
  if(((typeof x) === 'number') && ((typeof y) === 'number'))
    return x / y;
  else
    return NaN;
}

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
