const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];

function listarTarefas() {
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i + 1}. ${tarefas[i]}`);
    }
}

function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa);
    listarTarefas();
}

function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        listarTarefas();
    } 
}

listarTarefas();
adicionarTarefa("Beber mais água");
removerTarefa(1);