var input = require('fs').readFileSync('stdcin', 'utf8');
var lines = input.split('\n');


const numero = parseInt(lines.shift());

for (let i = 0; i < numero; i++) {
    let valores = lines.shift().split(' ');
    let media = (valores[0] * 2 + valores[1] * 3 + valores[2] * 5) / 10;
    console.log(media.toFixed(1));
}
