var input = require('fs').readFileSync('stdcin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(' ');
let H = parseInt(line[0]);
let P = parseInt(line[1]);
let media = (H / P).toFixed(2);
console.log('' + media);

