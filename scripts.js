var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logradouro = document.getElementById("logradouro");
var número = document.getElementById("número");
var Complemento = document.getElementById("Complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event){
    // alert("Você clicou no botão!!!!" + event);
    saida.innerText = "nome: " + nome.value + 
        "\n email: " + email.value +
        "\n telefone: " + telefone.value +
        "\n CEP: " + CEP.value +
        "\n logradouro: " + logradouro.value +
        "\n número: " + número.value +
        "\n Complemento: " + Complemento.value +
        "\n bairro: " + bairro.value +
        "\n cidade: " + cidade.value +
        "\n estado: " + estado.value;
}
