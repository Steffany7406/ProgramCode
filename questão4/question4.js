var nota = parseFloat(prompt("Digite a primeira nota:"))
var nota2 = parseFloat(prompt("Digite a segunda nota:"))
var nota3 = parseFloat(prompt("Digite a terceira nota:"))


media = (nota + nota2 + nota3) / 10;

alert(`Media: ${media.toFixed(1)}`);

if(media >= 7.0){
  alert("Aluno aprovado.");
}else if (media < 5.0){
  alert("Aluno reprovado.");
}