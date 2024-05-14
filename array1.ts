/* Nome:Dandara Gabrielli Santos Domingos
 vetores, um que contenha cada dia da semana, o outro
que contenha sete atividades/ hobby. Crie uma frase 
para cada dia da semana usando todos os índices dos dois vetores */

//Índice                       0              1              2              3
let meuArray : string[] = [`Domingo`, `segunda-feira`, `terça-feira`,`quarta-feira`,

    //      4             5           6
    `quinta-feira`, `sexta-feira`,`sábado`]
    
    //Índice                           0             1            2                   3
    let meuArray2 : string[] = [`vou a igreja`, `caminhar`, `vou na academia`, `dou aula de catequese`,
    
    //      4              5                    6 
    `academia`, `limpo a casa`,`faço aula de dança`];
    
    console.log (`No ${meuArray[0]} eu vou a ${meuArray2[0]} a noite, 
    na ${meuArray[1]} saio para ${meuArray2[1]}, ${meuArray[2]} eu ${meuArray2[2]},
    na ${meuArray[3]} eu ${meuArray2[3]}, na ${meuArray[4]} vou novamente na ${meuArray2[4]}, 
    ${meuArray[5]} eu ${meuArray2[5]} e no ${meuArray[6]} eu ${meuArray2[6]}.`);