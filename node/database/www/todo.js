var items;

document.onkeydown = keyListener; // 用 keyListener 方法注册按键事件
get(show);

function keyListener(e) {         // 当按下回车键，执行我们的代码
  if(e.keyCode == 13)     add();
}

function get(cb) {
  document.getElementById("output").innerHTML = "";

  fetch('http://192.168.130.144:8080').then(function(res) {
    res.text().then(function(data) {
      items = JSON.parse(data);
      cb();
    });
  });
}

function show() {
  var str = '<ul>\n';

  for (var i=0; i<items.length; i++)  {
    str += '<li>' + items[i] + '</li>\n';
  }
  
  str += '</ul>';
  document.getElementById("output").innerHTML = str;
}

function add() {
  var item = document.getElementById('todo').value;
  if(item === '') return;
  items.push(item);
  show();
  fetch('http://192.168.130.144:8080', {method: 'POST', body: item});
}
