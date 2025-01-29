//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var listaDeAmigo = [];
var exibirListaDeAmigo = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.getElementById('amigo');

    if (nome.value.trim() == "") {
        alert("Por favor, digite um nome.");
        return;
    }else {
        listaDeAmigo.push(nome.value);
        //limparcampo();
        exibirListaDeAmigo();
    }
}

function exibirListaDeAmigo(){
    
}


