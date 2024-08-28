var textoEntrada = document.querySelector('#textoEntrada');

var textoResultado = document.querySelector('#textoResultado');

var botaoCriptografia = document.querySelector('#botaoCriptografia');

var botaoDescriptografia = document.querySelector('#botaoDescriptografia');

// function receberTextoDeEntrada(){}

function criptografarTexto (){
    let textoRecebido = textoEntrada.value;

    let fraseNova = textoRecebido.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    let fraseTexto = fraseNova.toString().toLowerCase();

    textoResultado.innerHTML = fraseTexto;
    textoEntrada.value = '';
    
    /*console.log(mensagem);*/

}

function descriptografarTexto (){
    let textoRecebido = textoEntrada.value;

    let fraseNova = textoRecebido.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    let fraseTexto = fraseNova.toString().toLowerCase();

    textoResultado.innerHTML = fraseTexto
    textoEntrada.value = '';
    
    /*console.log(mensagem);*/

}


// botaoCriptografia.addEventListener('click', criptografarTexto);

// botaoDescriptografia.addEventListener('click', descriptografarTexto);

// function botaoDeCopiar(){
//     let copiaDoConteudo = document.querySelector('.textoResultado');
//     copiaDoConteudo.select();
//     copiaDoConteudo.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copiaDoConteudo.value);
// }

// function mostreOuEscondaCopiar(){
//     document.getElementById('copiarResultado').style.visibility = 'hidden';
// }

// mostreOuEscondaCopiar();
// botaoDeCopiar();

function botaoDeCopiar(){
    var copiaDoConteudo = document.querySelector('#textoResultado');
    copiaDoConteudo.select();
    copiaDoConteudo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiaDoConteudo.value);

    var mostrarMensagem = document.getElementById('nenhumTexto');    
    if (copiaDoConteudo.value == ''){
        
        mostrarMensagem.innerHTML  = 'Nenhum texto encontrado'       
        
    }else{
        mostrarMensagem.innerHTML = 'Texto copiado com sucesso';
    }

}



