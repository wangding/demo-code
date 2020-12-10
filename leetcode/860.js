/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let num = {
    '5':  0,  // 5 元面值钞票的张数
    '10': 0,  // 10元面值钞票的张数
    '20': 0   // 20元面值钞票的张数
  };

  for(let i=0; i<bills.length; i++) {
    switch(bills[i]) {
      case 5:
        num['5']++;
        break;

      case 10:
        if(--num['5'] >= 0) {
          num['10']++;
        } else {
          return false;
        }
        break;

      case 20:
        if(num['10'] - 1 >= 0 && num['5'] -1 >= 0) {
          num['10']--;
          num['5']--;
          num['20']++;
        } else if(num['5'] - 3 >= 0) {
          num['5'] -= 3;
          num['20']++;
        } else {
          return false;
        }
        break;
    }
  }

  return true;
};

lemonadeChange([5,5,10,10,20]);