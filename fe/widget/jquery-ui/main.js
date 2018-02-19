$(function() {
  var body = $('body');
  console.log(body);
  body.html('<div></div>');
  var div = body.children('div');
  console.log(div);
  console.log(div.context);
})
