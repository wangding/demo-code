function compress(source) {
  var keys ={};
  source.replace(/([^=&]+)=([^&]*)/g, function(full, key, value) {
    console.log('full = %s, key = %s, value = %s', full, key, value);
    console.log('before: ', keys);
    keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
    console.log('after: ', keys);
    return '';
  });
  console.log('keys: ', keys);

  var result = [];
  for(var key in keys) {
    result.push(key + '=' + keys[key]);
  }
  return result.join('&');
}

var str = 'foo=1&foo=2&blash=a&blash=b&foo=3';
console.log('str = %s', str);
console.log(compress(str));
