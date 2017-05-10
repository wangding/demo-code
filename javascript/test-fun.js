let num = 20;

var data = [{ id: '11518642', name: '孙彩华', date: '2017-01-02'  },
{ id: '12471936', name: 'doublemm', date: '2017-01-02'  },
{ id: '12471936', name: 'doublemm', date: '2017-01-02'  },
{ id: '12183090', name: '大树底下好乘凉', date: '2017-01-02'  },
{ id: '10473086', name: '和谐论', date: '2017-01-02'  },
{ id: '12287112', name: 'wwq645', date: '2017-01-02'  },
{ id: '2435797', name: 'whj10', date: '2017-01-01'  },
{ id: '2435797', name: 'whj10', date: '2017-01-01'  },
{ id: '2435797', name: 'whj10', date: '2017-01-01'  },
{ id: '10454784', name: 'chahouwei2', date: '2017-01-01'  },
{ id: '12470081', name: '一生一个她cp', date: '2017-01-01'  },
{ id: '1135682', name: 'dreamfqy007', date: '2017-01-01'  },
{ id: '10504115', name: 'First2311', date: '2016-12-31'  },
{ id: '9733861', name: 'xzbxtla', date: '2016-12-31'  }];

for(let i=0; i<10; i++) {
  getOrderData(num--);
}

function getOrderData(num) {
  console.log(num);
}

var sum = {
  "2016-12": 0,
  "2017-01": 0,
  "2017-02": 0
};

console.log(sum);

function calc() {
  let month;

  data.forEach(function(v) {
    month = v.date.slice(0, 7);
    console.log(month);
    sum[month]++;
  });
}

calc();
console.log(sum);
