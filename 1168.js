const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

const numDeLed = parseInt(lines.shift());

for (let i = 0; i < numDeLed; i++) {
    const num = lines.shift();
    let leds = 0;
    
    for (let j = 0; j < num.length; j++) {
        switch (num[j]) {
        case '1':
            leds += 2;
            break;
        case '2':
        case '3':
        case '5':
            leds += 5;
            break;
        case '4':
            leds += 4;
            break;
        case '6':
        case '9':
        case '0':
            leds += 6;
            break;
        case '7':
            leds += 3;
            break;
        case '8':
            leds += 7;
            break;
        }
    }
    
    console.log(`${leds} leds`);
}


