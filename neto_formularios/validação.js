function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
  
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
    
  
    // Verificar outras validações...
  
    return true;
  }
  
  function validarCPF(cpf) {
    // Remove caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Validação do dígito verificador
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(9), 10)) {
      return false;
    }
  
    soma = 0;
    for (i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(10), 10)) {
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

  
  