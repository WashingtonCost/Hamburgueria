<?php
$_con = mysqli_connect('127.0.0.1','root','','hamburgueria');
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   
    
$nome =  $_POST["nome"];
$nome =  $_POST["sobrenome"];
$datanasc = $_POST["datanasc"];
$genero = $_POST["genero"];
$cidade = $_POST["cidade"];
$numero = $_POST["telefone"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$cargo = $_POST["cargo"];
$username = $_POST["username"];

$sql = "INSERT INTO funcionario ( usu_nome, usu_sobrenome, usu_data_nascimento, usu_senha, usu_cpf, usu_genero, usu_telefone, usu_email, usu_cidade, use_username,) values ( '$nome', '$sobrenome', '$datanasc', '$senha', '$cpf', '$genero', '$telefone', '$email', '$cidade', '$username',)";



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