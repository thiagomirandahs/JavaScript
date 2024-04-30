var entrada = require('readline-sync');

var raio = parseFloat(entrada.question(' Digite o raio: '));
var pi = Math.PI;
var area =(raio *  (Math.pow(pi,2)) ).toFixed(2);
console.log(area)