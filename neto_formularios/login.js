function entradamenu (){
    location.replace("../index.html");
    
} 

$(document).ready(function() {
    // Função para habilitar ou desabilitar o botão "Entrar"
    function atualizarBotaoEntrar() {
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if (username !== "" && email !== "" && password !== "") {
            $("#entrar-btn").prop("disabled", false);
        } else {
            $("#entrar-btn").prop("disabled", true);
        }
    }

    // Atualiza o estado do botão ao digitar nos campos
    $("#username, #email, #password").on("input", function() {
        atualizarBotaoEntrar();
    });
});

