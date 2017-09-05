#!/usr/bin/node
// 08-kill.js

var argv = process.argv;

process.kill(argv[2], argv[3]);
