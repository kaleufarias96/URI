const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

let [a, b, c] = lines.shift().split(' ').map(item => parseInt(item));

while (a !== 0 && b !== 0 && c !== 0) {
    const area = a * b;
    const areaMax = area * 100 / c;
    const areaMaxLado = Math.sqrt(areaMax);

    console.log(Math.trunc(areaMaxLado));

    [a, b, c] = lines.shift().split(' ').map(item => parseInt(item));
}
