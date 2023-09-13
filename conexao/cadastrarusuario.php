<?php
$_con = mysqli_connect('127.0.0.1','root','','hamburgueria');
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   
    
$nome =  $_POST["nome"];
$sobrenome =  $_POST["sobrenome"];
$datanasc = $_POST["datanasc"];
$telefone = $_POST["telefone"];
$username = $_POST["username"];
$genero = $_POST["genero"];
$cidade = $_POST["cidade"];
$numero = $_POST["telefone"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$cpf = $_POST["cpf"];

$sql = "INSERT INTO usuario ( usu_nome, usu_sobrenome, usu_username, usu_data_nascimento, usu_cpf, usu_cidade, usu_genero, usu_telefone, usu_email, usu_senha ) values ( '$nome', '$sobrenome', '$username', '$datanasc', '$cpf', '$cidade', '$genero', '$telefone', '$email', '$senha')";



    if ($_con->query($sql) === TRUE) {
        echo"Dados inseridos com sucesso!";
    } else {
        echo"Erro na inserção: " . $_con->error;
    }

    $_con->close();
}
else{
    echo "Erro de Dados";
}
?>