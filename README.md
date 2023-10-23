# Hamburgueria 
# 3 B T.I 
alunos: Washington, Welington, Luis Gustavon

# BANCO DE DADOS DA HAMBURGUEARIA

drop database Hamburgueria;
create database Hamburgueria;
use Hamburgueria;


create table produtos
(
id_pro int primary key,
nome_pro varchar(300),
tipo_pro varchar(300),
valor_pro int
);


create table usuario 
(
id_usu int primary key auto_increment,
usu_nome varchar (70),
usu_sobrenome varchar (300),
usu_username varchar (30),
usu_data_nascimento date,
usu_cpf varchar (300),
usu_cidade varchar (40),
usu_genero varchar (100),
usu_telefone varchar (15),
usu_email varchar (40),
usu_senha double
);

create table funcionario
(
id_fun int primary key auto_increment,
fun_nome varchar (70) not null,
fun_sobrenome varchar (70) not null,
fun_data_nascimento date,
fun_senha double,
fun_genero varchar (10),
fun_telefone varchar (15),
fun_email varchar (40),
fun_cidade varchar (40),
fun_cpf float,
fun_cargo varchar(300)
);
 
create table caixa
(
id_cai int primary key,
forma_pag_cai varchar(300),
id_pro_fk int,
foreign key (id_pro_fk) references produtos (id_pro)
);

create table apoienos 
(
id_apo int primary key,
sugestão_apo varchar(300),
id_pro_fk int,
foreign key (id_pro_fk) references produtos (id_pro),
id_cai_fk int,
foreign key (id_cai_fk) references caixa (id_cai)
); 

create table reserva
(
id_res int primary key,
numerodemesa_res varchar (300),
quantidadepessoas_res varchar (300),
horario_res time,
area_res varchar (300),
datadisponivel_des date,
nome_res varchar (50),
complemento_res varchar (300),
id_cai_fk int,
foreign key (id_cai_fk) references caixa (id_cai)
);

create table pedido
(
id_ped int primary key,
numerodamesa_pedi varchar (300),
localizacao_pedi varchar (360),
horario_pedi time,
area_pedido varchar (300),
datadisponivel date,
nome_pedi varchar (70),
complemento_pedi varchar (70),
id_pro_fk int,
foreign key (id_pro_fk) references produtos (id_pro),
id_cai_fk int,
foreign key (id_cai_fk) references caixa (id_cai)
);


create table login
(
id_log int primary key,
nome_log varchar (30),
email_log varchar (40),
senha_pro varchar (30),
id_usu_fk int,
foreign key (id_usu_fk) references usuario (id_usu),
id_fun_fk int,
foreign key (id_fun_fk) references funcionario (id_fun)
);



