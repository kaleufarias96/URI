const input = require('fs').readFileSync('stdcin', 'utf8');
const lines = input.split('\n');

const [horaInicial, horaFinal] = lines.shift().split(' ').map(item => parseInt(item));

let duracao = 0;

if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial;
}else {
    duracao = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);