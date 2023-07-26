
//1ºForma de fazer uma calculadora em js. 
var valor1 = parseInt(prompt("digite um valor"));
var valor2 = parseInt(prompt("digite o segundo valor"));
var operacaoUsuario = prompt("digite a operacao");

function calcular(){
   // deve chamar a funcao de verificacao de caractere
   // deve chamar a funcao de alert resultado 
   verificarOperacao(operacaoUsuario, valor1, valor2);
}

function verificarOperacao(operacaoMatematica, n1, n2){
   if( operacaoMatematica == "+"){
      exibir(somar(n1,n2))
   }else if(operacaoMatematica == "-"){
      exibir(subtrair(n1,n2))
   }
   else if(operacaoMatematica == ""){
      exibir(multiplicar(n1,n2))
   }
   else if(operacaoMatematica == "/"){
      exibir(dividir(n1,n2))
   }
}

function somar(n1,n2){
   return n1 + n2;
}

function subtrair(n1, n2){
   return n1 - n2;
}

function multiplicar(n1, n2){
   return n1 * n2;
}

function dividir(n1, n2){
   return n1 / n2;
}

function exibir(algo){
   alert(algo);
}
//2º Calculadora em JS utilizando o callback (função que recebe outra função como paramêtro).
// var valor1 = parseInt(prompt("Digite um valor"));
// var valor2 = parseInt(prompt("Digite o segundo valor"));
// var operacaoUsuario = prompt("Digite a operação (+, -, *, ou /)");

// function calcular() {
//   if (operacaoUsuario == "+") {
//     verificarOperacao(somar, valor1, valor2);
//   } else if (operacaoUsuario == "-") {
//     verificarOperacao(subtrair, valor1, valor2);
//   } else if (operacaoUsuario == "*") {
//     verificarOperacao(multiplicar, valor1, valor2);
//   } else if (operacaoUsuario == "/") {
//     verificarOperacao(dividir, valor1, valor2);
//   }
// }

// function verificarOperacao(operacaoMatematica, n1, n2) {
//   alert(operacaoMatematica(n1, n2));
// }

// function somar(n1, n2) {
//   return n1 + n2;
// }

// function subtrair(n1, n2) {
//   return n1 - n2;
// }

// function multiplicar(n1, n2) {
//   return n1 * n2;
// }

// function dividir(n1, n2) {
//   return n1 / n2;
// }

// function alert(resultado) {
//   alert(resultado);
// }
// calcular();
