var entrada = require('readline-sync');


var valor = parseFloat(entrada.question('Digite o valor: '));

var porcentagem = 0.75;

var resultado = (valor * porcentagem);

console.log(`O valor correspondente a 75% é :${resultado}`)

