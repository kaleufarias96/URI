const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

let notas = [];
let media = 0;
let i = 0;

while (i < 2) {
    let nota = parseFloat(lines.shift());
    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        i++;
    } else {
        console.log('nota invalida');
    }
}

media = (notas[0] + notas[1]) / 2;
console.log('media = ' + media.toFixed(2));