/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/
console.clear;
var teclado = require("prompt-sync")();
var numeros = new Array();
var maior = 0;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("Digite o numero do \u00EDndice ".concat(x, " do Array")));
}
for (var i = 0; i < 10; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
//console.clear();
console.log("O maior n\u00FAmero \u00E9 ".concat(maior));
