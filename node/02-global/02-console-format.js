#!/usr/bin/node
// 02-console-format.js

var user = {name: '王顶', 
            qq: '408542507'};

console.log('name: %s', user.name);
console.log('age: %d', 40);
console.log('JSON: %j', user);

console.error('Error, something wrong!');
