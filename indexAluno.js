var valor1 = parseInt(prompt("Digite um valor"));
var valor2 = parseInt(prompt("Digite o segundo valor"));
var operacaoUsuario = prompt("Digite a operação (+, -, *, ou /)");

function calcular() {
  if (operacaoUsuario == "+") {
    verificarOperacao(somar, valor1, valor2);
  } else if (operacaoUsuario == "-") {
    verificarOperacao(subtrair, valor1, valor2);
  } else if (operacaoUsuario == "*") {
    verificarOperacao(multiplicar, valor1, valor2);
  } else if (operacaoUsuario == "/") {
    verificarOperacao(dividir, valor1, valor2);
}
}

function verificarOperacao(operacaoMatematica, n1, n2) {
  exibir(operacaoMatematica(n1, n2));
}

function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

function exibir(resultado) {
  alert(resultado);
}
calcular()