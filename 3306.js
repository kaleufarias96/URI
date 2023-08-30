const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

const [n, q] = lines.shift().split(' ').map(item => parseInt(item));

const array = lines.shift().split(' ').map(item => parseInt(item));

for (let i = 0; i < q; i++) {
    const [query, a, b, v] = lines.shift().split(' ').map(item => parseInt(item));

    if (query === 1) {
        for (let j = a - 1; j < b; j++) {
            array[j] += v;
        }
    } else {
        let mdc = array[a - 1];
        for (let j = a; j < b; j++) {
            mdc = gcd(mdc, array[j]);
        }
        console.log(mdc);
    }
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

