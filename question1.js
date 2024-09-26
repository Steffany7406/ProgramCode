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