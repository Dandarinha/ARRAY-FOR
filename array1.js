/* Nome:
 1- Faça dois vetores, um que contenha cada dia da semana, o outro
que contenha sete atividades/ hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores */
//Índice                       0              1              2              3
var meuArray = ["Domingo", "segunda-feira", "ter\u00E7a-feira", "quarta-feira", 
    //      4             5           6
    "quinta-feira", "sexta-feira", "s\u00E1bado"];
//Índice                           0             1            2             3
var meuArray2 = ["vou a igreja", "caminhar", "vou na academia", "dou aula de catequese", 
    //      4              5                    6 
    "academia", "limpo a casa", "fa\u00E7o aula de dan\u00E7a"];
console.log("No ".concat(meuArray[0], " eu vou a ").concat(meuArray2[0], " a noite, \n    na ").concat(meuArray[1], " saio para ").concat(meuArray2[1], ", ").concat(meuArray[2], " eu ").concat(meuArray2[2], ",\n     na ").concat(meuArray[3], " eu ").concat(meuArray2[3], ", na ").concat(meuArray[4], " vou novamente na ").concat(meuArray2[4], ", \n     ").concat(meuArray[5], " eu ").concat(meuArray2[5], " e no ").concat(meuArray[6], " eu ").concat(meuArray2[6], "."));
