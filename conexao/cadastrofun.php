<?php
$_con = mysqli_connect('127.0.0.1','root','','hamburgueria');
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   
    
$nome =  $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$cpf = $_POST["cpf"];
$genero = $_POST["genero"];
$datanasc = $_POST["datanasc"];
$cidade = $_POST["cidade"];
$numero = $_POST["numero"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$cargo = $_POST["cargo"];

$sql = "INSERT INTO funcionario ( fun_nome, fun_sobrenome, fun_data_nascimento, fun_senha, fun_genero, fun_telefone, fun_email, fun_cidade, fun_cpf, fun_cargo ) values ( '$nome', '$sobrenome', '$datanasc', '$senha', '$genero', '$numero', '$email', '$cidade', '$cpf', '$cargo')";



    if ($_con->query($sql) === TRUE) {
        echo"Dados inseridos com sucesso!";
    } else {
        echo"Erro na inserção: " . $_con->error;
    }

    $_con->close();
}
else{
    echo "Erro Dados";
}
?>