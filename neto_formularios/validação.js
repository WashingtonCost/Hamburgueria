function validarFormulario() {
  var inputs = document.querySelectorAll('#login-form input');
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;

  // Percorrer os inputs para adicionar o evento blur
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      if (input.value.trim() === '') {
        alert('O campo "' + input.getAttribute('name') + '" é obrigatório.');
      }
    });
  });

  // Verificar se o campo nome não está vazio
  if (nome.trim() === '') {
    alert('O campo "Nome" é obrigatório.');
    return false;
  }

  // Verificar se o campo e-mail é um e-mail válido
  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert('O campo "E-mail" deve ser um endereço de e-mail válido.');
    return false;
  }

  if (!validarCPF(cpf)) {
    alert('O campo "CPF" deve conter um CPF válido.');
    return false;
  }


  return true;
}


window.onload = function () {
  var form = document.getElementById('login-form');
  var botao = document.getElementById('botaoBuscar');

  botao.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    if (validarFormulario()) {
      form.submit(); // Envia o formulário manualmente se a validação passar
    }
  });
};


  
  