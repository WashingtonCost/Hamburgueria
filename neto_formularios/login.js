$(document).ready(function () {
    // Habilita o botão de entrar quando todos os campos forem preenchidos corretamente
    $('#login-form input').on('keyup change', function () {
        var empty = false;
        $('#login-form input').each(function () {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            $('#entrar-btn').attr('disabled', 'disabled');
        } else {
            $('#entrar-btn').removeAttr('disabled');
        }
    });

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Redireciona para a página "index.html" menu
        window.location.href = 'index.html';
        
    });
});




