let listaDeNumerosSorteados = [];
let numeroLimete = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 2;

function exiberTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exiberMensagemInicial(){
        exiberTextoNaTela('h1', 'Jogo do número secreto');
        exiberTextoNaTela('p', 'Escolha um número entre 1 e 10' );
}

exiberMensagemInicial();

function verificarChute(){
        let chute = document.querySelector('input').value;
    
        if(chute == numeroSecreto){
            exiberTextoNaTela('h1', 'Você venceu :)' );
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' ;
            let mensagemTentativas =  `Você descobriu o número secreto com ${tentativas} ${palavraTentativas} !`;
            exiberTextoNaTela('p', mensagemTentativas );
            document.getElementById('reiniciar').removeAttribute('disabled');
          }
          else {
                if (chute > numeroSecreto){
                        exiberTextoNaTela( 'p', 'O número secreto é menor:');
                }
                else{
                        exiberTextoNaTela('p', 'O número é maior');
                }tentativas++;
                limparCampo();
                
          }
}
function gerarNumeroAleatorio(){
        let numeroEscolhido = parseInt(Math.random() * numeroLimete + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];

        }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatorio();
        }else{
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados);
                return numeroEscolhido;
        }
}
function limparCampo(){
          chute = document.querySelector('input');
          chute.value = '';

}
function reiniciarJogo(){

        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exiberMensagemInicial ();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}