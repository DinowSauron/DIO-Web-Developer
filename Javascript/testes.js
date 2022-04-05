
let totalDeDias = parseInt(-500);

let qtdAnos, qtdMeses;
totalDeDias < 0 ? totalDeDias = 0 : ''

qtdAnos = parseInt(totalDeDias/365);
totalDeDias= totalDeDias - (365 * qtdAnos);


qtdMeses= parseInt(totalDeDias/30);
totalDeDias= parseInt(totalDeDias - (30 * qtdMeses));

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);