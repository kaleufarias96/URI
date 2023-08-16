const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');


let R = parseFloat(lines.shift());
let pi = 3.14;
let circunferencia = 2 * pi * R;

console.log(circunferencia.toFixed(2));
