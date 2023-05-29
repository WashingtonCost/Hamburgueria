document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('#login-form input');

    inputs.forEach(function (input) {
        input.addEventListener('blur', function () {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
                document.getElementById('entrar-btn').disabled = false;
            } else {
                document.getElementById('entrar-btn').disabled = true;
            }
        });
    });

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Redireciona para a página "index.html"
        window.location.href = 'index.html';
        
    });
});


