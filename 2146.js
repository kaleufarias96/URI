const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');


let n = parseInt(lines.shift());

while (n) {
    console.log(n - 1);
    n = parseInt(lines.shift());
}


