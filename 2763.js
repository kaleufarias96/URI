let input = require('fs').readFileSync('stdcin', 'utf8');
let lines = input.split('\n');


let cpf = lines.shift().split('.');
let cpf2 = cpf[2].split('-');

console.log(cpf[0]);
console.log(cpf[1]);
console.log(cpf2[0]);
console.log(cpf2[1]);
