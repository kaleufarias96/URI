const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');


const salary = parseFloat(lines.shift());

let tax = 0;

if (salary <= 2000) {
    tax = 0;
} else if (salary <= 3000) {
    tax = (salary - 2000) * 0.08;
}else if (salary <= 4500) {
    tax = (salary - 3000) * 0.18 + 1000 * 0.08;
}else {
    tax = (salary - 4500) * 0.28 + 1500 * 0.18 + 1000 * 0.08;
}
if(tax === 0) {
    console.log('Isento');
}else {
    console.log(`R$ ${tax.toFixed(2)}`);
}
