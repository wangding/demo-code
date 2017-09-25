#!/usr/bin/env node

var http = require('http');
const { URL } = require('url');

var city = process.argv[2] || '石家庄';
var addr = new URL('http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city=' + city);
//var addr = 'http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city=' + city;

http.get(addr, function(res) {
  var result = '';

  res.on('data', function(data) {
    result += data.toString('utf8');
    //console.log(data.toString('utf8'));
  });
  
  res.on('end', function() {
    var weather = JSON.parse(result);
    //console.log(weather);

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
