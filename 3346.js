const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');


const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b] = pegarValores(lines.shift())

let flutuacao = ((((1.0 + a/100.00) * (1.0 + b/100.00)) - 1.0) * 100.0)

console.log(flutuacao.toFixed(6));


