var entrada = require('readline-sync');

var largura = parseFloat(entrada.question('Digite a Largura: '));

var comprimento = parseFloat(entrada.question('Digite o Comprimento: '));

var area_total = (comprimento * largura)

var largura_casa = parseFloat(entrada.question('Digite o largura da Casa: '));

var comprimento_casa = parseFloat(entrada.question('Digite o Comprimento da Casa'))

var area_total_casa = (largura_casa * comprimento_casa)

var area_restante = (area_total_casa - area_total)

console.log(`A aréa restante do terreno é :${area_restante}`)