var i = 0;
var max = 3;

var id = setInterval(f, 3000);

function f()
{
  i++;
  console.log(i);

  if(i === max) clearInterval(id);
}
