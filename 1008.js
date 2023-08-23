const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

const [number, hours, value] = lines.map(item => parseFloat(item));

const salary = hours * value;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
