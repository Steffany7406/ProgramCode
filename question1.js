/*Elabore um programa em Javascript que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”.  Considerar os valores/tempos da tabela a seguir:*/


let vel = 100; //velocidade
let cond = 65;

for(let i = 0; i < vel; i++){
    if (i%20 <= cond){
        console.log("Sem multa!");
        break;
    } else if (i%20 >= cond){
        console.log("Multa leve!");
        break;
    } else{
        console.log("Multa grave!");
        break;
    }
}
