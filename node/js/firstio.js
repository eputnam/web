var fs = require('fs');
var file = process.argv[2];
var buf = fs.readFileSync(file);
var str = buf.toString();

var a = str.split('\n');

var count = a.length - 1;


console.log(count);
