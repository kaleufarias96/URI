const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

let n = parseInt(lines.shift()); 
let i = 1;

while (n !== 0) {
    console.log(`resposta ${i}: ${lines.shift()}`);
    i++;
    n--;
}

