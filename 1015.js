var input = require('fs').readFileSync('stdcin', 'utf8');
var lines = input.split('\n');


let valores = lines.shift().split(' ');
let x1 = parseFloat(valores[0]);
let y1 = parseFloat(valores[1]);

valores = lines.shift().split(' ');
let x2 = parseFloat(valores[0]);
let y2 = parseFloat(valores[1]);

const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));


