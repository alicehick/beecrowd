var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split('\n');

var idFuncionario = valores.shift()
var qtdHorasTrabalhadas = valores.shift()
var valorHora = valores.shift()

var salario = qtdHorasTrabalhadas * valorHora;


console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
