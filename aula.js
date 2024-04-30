var entrada = require('readline-sync');

var nome = entrada.question("Qual seu nome? ")
var num1 = parseFloat(entrada.question(' Digite o primeiro numero: '));

var num2 = parseFloat(entrada.question('Digite o segundo numero: '));

var num3 = parseFloat(entrada.question('Digite o terceiro numero: '));

var soma = (num1 + num2 + num3);
var media = (soma / 3).toFixed(2);


console.log(`Bom ${nome}, sua média é: ${media}`);

