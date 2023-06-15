// Função para formatar o CPF no padrão 000.000.000-00
function formatarCPF() {
  const cpfInput = document.getElementById('cpf');
  let cpf = cpfInput.value;

  // Remove todos os caracteres que não são dígitos
  cpf = cpf.replace(/\D/g, '');

  // Adiciona a máscara no CPF
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  // Atualiza o valor do input
  cpfInput.value = cpf;

}


// Função para formatar o telefone no padrão (99) 9 9999-9999
function formatarTelefone() {
  const telefoneInput = document.getElementById('telefone');
  let telefone = telefoneInput.value;

  // Remove todos os caracteres que não são dígitos
  telefone = telefone.replace(/\D/g, '');

  // Adiciona a máscara no telefone
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
  telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2');

  // Atualiza o valor do input
  telefoneInput.value = telefone;
}

// Função para validar o formulário
function validarFormulario(event) {
  const inputs = document.querySelectorAll('input');
  let formValido = true;

  inputs.forEach((input) => {
    // Remove a classe de validação do Bootstrap
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

    // Valida o campo
    if (!input.checkValidity()) {
      // Adiciona a classe de inválido do Bootstrap
      input.classList.add('is-invalid');
      formValido = false;
    } else {
      // Adiciona a classe de válido do Bootstrap
      input.classList.add('is-valid');
    }
  });

  if (!formValido) {
    event.preventDefault();
  }
}

// Adiciona o ouvinte de evento a todos os inputs para validar quando o foco sair
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    // Remove a classe de validação do Bootstrap
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

    // Valida o campo
    if (!input.checkValidity()) {
      // Adiciona a classe de inválido do Bootstrap
      input.classList.add('is-invalid');
    } else {
      // Adiciona a classe de válido do Bootstrap
      input.classList.add('is-valid');
    }
  });
});




  
  