/**
 * 数值字符串解析
 *
 * @param numbers 零个或多个逗号分隔的数值组成的字符串
 * @returns {number} 如果输入的字符串不包含数值，返回 0
 *                   如果输入的字符串包含一个数值，返回该数值
 *                   如果输入的字符串包含多个数字，返回这些数值和
 */
function parseAndSum(numbers) {
  var nums = numbers.split(','),
      sum  = 0;

  if(nums.length === 0) {
    return 0;
  }

  nums.forEach(function(num) {
    // here bug
    // if(!isNaN(Number(num))) sum += num; 
    if(!isNaN(Number(num))) sum += Number(num); 
  });

  return sum;
}

module.exports = parseAndSum;
