<?php
$_con = mysqli_connect('127.0.0.1','root','','hamburgueria');
if($_con===FALSE) {
 echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    
    
    $hamburgue = mysqli_real_escape_string($_con, $_POST['hamburgue']);
    $bebida = mysqli_real_escape_string($_con, $_POST['bebida']);
    $pocao = mysqli_real_escape_string($_con, $_POST['pocao']);
    $combo = mysqli_real_escape_string($_con, $_POST['combo']);
    $cupon = mysqli_real_escape_string($_con, $_POST['cupon']);
    
    $sql = 'INSERT INTO  ()'
    
 mysqli_close($_con);
}
?>