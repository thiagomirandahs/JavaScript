var entrada = require('readline-sync');

var piso =(10*15);
var caixa = 2.20;
var quantidade = ((piso / caixa )+1).toFixed(0)
console.log(`Você precisa de ${quantidade} caixas.`)
