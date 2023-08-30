const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

let nota1 = parseFloat(lines.shift());
let nota2 = parseFloat(lines.shift());
let media = 0;
let novoCalculo = 1;

while (novoCalculo === 1) {
    while (nota1 < 0 || nota1 > 10) {
        console.log('nota invalida');
        nota1 = parseFloat(lines.shift());
    }
    while (nota2 < 0 || nota2 > 10) {
        console.log('nota invalida');
        nota2 = parseFloat(lines.shift());
    }
    media = (nota1 + nota2) / 2;
    console.log(`media = ${media.toFixed(2)}`);
    console.log('novo calculo (1-sim 2-nao)');
    novoCalculo = parseInt(lines.shift());
    while (novoCalculo !== 1 && novoCalculo !== 2) {
        console.log('novo calculo (1-sim 2-nao)');
        novoCalculo = parseInt(lines.shift());
    }
    if (novoCalculo === 1) {
        nota1 = parseFloat(lines.shift());
        nota2 = parseFloat(lines.shift());
    }
}
