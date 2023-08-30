const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

function palavraValue(palavra) {
    const values = {
        'one': 1,
        'two': 2,
        'three': 3
    };

    if (palavra in values) {
        return values[palavra];
    }

    for (const correctPalavra in values) {
        if (correctPalavra.length === palavra.length) {
            let diffCount = 0;
            for (let i = 0; i < correctPalavra.length; i++) {
                if (correctPalavra[i] !== palavra[i]) {
                    diffCount++;
                }
            }
            if (diffCount === 1) {
                return values[correctPalavra];
            }
        }
    }
}

const numPalavras = parseInt(lines[0]);

for (let i = 1; i <= numPalavras; i++) {
    const palavra = lines[i].trim().toLowerCase();
    const value = palavraValue(palavra);
    console.log(value);
}
