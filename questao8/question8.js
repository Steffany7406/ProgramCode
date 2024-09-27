/*Leia um número inteiro que representa um código de DDD para discagem interurbana. 
Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada:
A entrada consiste de um único valor inteiro.

Saída:
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.*/


var docFile = prompt("Digite seu DDD:");

let DDD = parseInt(docFile);

switch(DDD){
    case 61:    alert("Brasilia");
                break;
    case 71:    alert("Salvador");
                break;
    case 11:    alert("Sao Paulo");
                break;
    case 21:    alert("Rio de Janeiro");
                break;
    case 32:    alert("Juiz de Fora");
                break;
    case 19:    alert("Campinas");
                break;
    case 27:    alert("Vitoria");
                break;
    case 31:    alert("Belo Horizonte");
                break;
    default:    alert("DDD não cadastrado");
                break;
}
