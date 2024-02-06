//  document.querySelector = busca documentos
// innerHTML = busca algo dento da HDML

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um numero de 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:1.2});
}
function exibeirMensagemInical () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um numero entre 1 a 10');
}

exibeirMensagemInical();

// function= função
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let paravraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${paravraTentativa}`; 
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela( 'p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() *numeroLimite +1);
    let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;


if (quantidadesDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}

    if(listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibeirMensagemInical ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}