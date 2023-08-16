const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
    let line = lines.shift().split(' ');
    let a = parseInt(line[0]);
    let b = parseInt(line[2]);
    let c = parseInt(line[4]);
    let result = 0;
    if (line[1] == '+') {
        result = a + b;
    } else if (line[1] == '-') {
        result = a - b;
    } else if (line[1] == 'x') {
        result = a * b;
    } else if (line[1] == '/') {
        result = a / b;
    }
    if (result == c) {
        console.log(`resposta ${i}: ${result}`);
    } else {
        console.log(`resposta ${i}: ${result} (errado)`);
    }
}

