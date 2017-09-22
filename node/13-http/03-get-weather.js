#!/usr/bin/env node

var http = require('http');
const { URL } = require('url');

if(process.argv.length < 3) { 
  console.log('usage:\n\t ./05-get-weather.js city');
  process.exit(1);
}

var city = process.argv[2];
var addr = new URL('http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city=' + city);

http.get(addr, function(res) {
  var result = '';

  res.on('data', function(data) {
    result += data.toString('utf8');
  });

  res.on('end', function() {
    var weather = JSON.parse(result);

    console.log('city:', weather.result.city);
    console.log('date:', weather.result.date);
    console.log('week:', weather.result.week);
    console.log('weather:', weather.result.weather);
    console.log('tem:', weather.result.temp);
    console.log('temphigh:', weather.result.temphigh);
    console.log('templow:', weather.result.templow);
    console.log('windspeed:', weather.result.windspeed);
    console.log('winddirect:', weather.result.winddirect);
    console.log('windpower:', weather.result.windpower);
  });
});
