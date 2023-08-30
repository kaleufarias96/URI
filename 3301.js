const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');


let [h, z, l] = lines.shift().split(' ').map(item => parseInt(item));

while (h !== undefined) {
    if (h > z && h < l) {
        console.log('huguinho');
    } else if (z > h && z < l) {
        console.log('zezinho');
    } else {
        console.log('luisinho');
    }
    [h, z, l] = lines.shift().split(' ').map(item => parseInt(item));
}

