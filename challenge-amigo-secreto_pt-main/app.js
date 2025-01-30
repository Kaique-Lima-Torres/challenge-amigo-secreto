//Aqui você deverá desenvolver a lógica para resolver o problema.
var listaDeAmigos = [];
var exibirListaNaTela = document.getElementById('listaAmigos');


function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    
    if(nome.value.trim() == "") {
        alert('Por favor, adicione um nome na lista.');
        return
    }else {
        listaDeAmigos.push(nome.value);
        limparCampo();
        exibirAmigosNaTela();
        
    }
}

function sortearAmigo() {
    if(listaDeAmigos.length == 0) {
        alert('Não há nenhum nome para ser sorteado!');
        return
    } else {
        let amigoSecreto = document.getElementById('resultado')
        let gerarAmigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        amigoSecreto.innerHTML = `O amigo secreto é ${gerarAmigoSecreto}`;
    }
}

function exibirAmigosNaTela() {
        exibirListaNaTela.innerHTML = '';
        listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        exibirListaNaTela.appendChild(li);
    });

}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
    
}

