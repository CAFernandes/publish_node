# Gerenciamento de publicações com Node JS

Olá esse projeto tem como objetivo estudo de boas práticas em  **Node JS**.
O objetivo dele é gerenciar a inclusão de publicações e listagem delas facilitando o acesso para o usuário. 

## Dependências 

 - body-parser [Documentação](https://www.npmjs.com/package/body-parser)
 - consign [Documentação ](https://www.npmjs.com/package/consign)
-  ejs [Documentação](https://www.npmjs.com/package/ejs)
-  express-validator [Documentação](https://express-validator.github.io/docs/)
-  mysql [Documentação](https://www.npmjs.com/package/mysql)

# Instalação
Execute o comando 

    git clone https://github.com/CaioAFernandes/publish_node.git
    git npm install


## Criando do Banco de Dados
Execute o código abaixo para criar a tabela no banco de dados

    CREATE TABLE `news` (
		`id` INT(11) NOT NULL AUTO_INCREMENT,
		`titulo` VARCHAR(255) NULL DEFAULT NULL,
		`resumo` VARCHAR(100) NULL DEFAULT NULL,
		`conteudo` TEXT NULL,
		`autor` VARCHAR(255) NULL DEFAULT NULL,
		`data_noticia` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (`id`)
	)
	COLLATE='utf8mb4_0900_ai_ci'
	ENGINE=InnoDB
	AUTO_INCREMENT=6;
Configure o arquivo connection.js na pasta DB com as configurações de conexão ao banco

## Inicializando
Execute o comando:

npm run start

Caso deseje rodar em teste execute os comandos:

    npm install nodemon
    npm run dev

### Objetivos alcançados
 - Inclusão de novas publicações
 - Listagem de novas publicações
 - Exibir últimas publicações
 - Editar publicações antigas
 
### Objetivos pendentes
 - Realização de publicações através de login
