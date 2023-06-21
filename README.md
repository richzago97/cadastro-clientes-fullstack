# Documentação do Projeto Full Stack - Cadastro de Clientes

## Visão Geral

Este projeto full stack é um sistema de cadastro de clientes que permite a associação de múltiplos contatos a cada cliente. Além disso, o sistema oferece a funcionalidade de geração de relatórios em tela ou em PDF, que exibem os dados do cliente e os contatos vinculados a ele. Tanto os clientes quanto os contatos possuem operações CRUD (Create, Read, Update, Delete).

### Tecnologias Utilizadas

-  Back-End:

   -  Node.js
   -  TypeScript
   -  Express.js
   -  TypeORM
   -  PostgreSQL

-  Front-End:
   -  React.js
   -  TypeScript

## Instalação

Antes de iniciar o projeto, certifique-se de ter as seguintes tecnologias instaladas em seu ambiente de desenvolvimento:

-  Node.js: [https://nodejs.org](https://nodejs.org)
-  Yarn: [https://yarnpkg.com](https://yarnpkg.com)

Após a instalação dessas ferramentas, siga as instruções abaixo para configurar e executar o projeto.

### Configuração do Back-End

1. Abra um terminal e navegue até a pasta raiz do projeto.

2. Execute o seguinte comando para instalar as dependências do projeto:

```bash
yarn
```

3. Crie um arquivo de ambiente `.env` com base no arquivo `.env.example` fornecido. Você pode usar o comando abaixo para isso:

```bash
cp .env.example .env
```

4. Abra o arquivo `.env` e preencha as variáveis de ambiente necessárias, como `SECRET_KEY`, `PORT`, `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB_NAME` e `POSTGRES_DB_PORT`. Certifique-se de fornecer as configurações corretas para o banco de dados PostgreSQL.

5. Execute as migrações do banco de dados usando o seguinte comando:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

### Configuração do Front-End

1. Navegue até a pasta `front` no diretório raiz do projeto:

```bash
cd front
```

2. Execute o seguinte comando para instalar as dependências do projeto:

```bash
yarn
```

## Executando o Projeto

Após concluir as etapas de configuração, você estará pronto para executar o projeto. Siga as instruções abaixo para iniciar o servidor back-end e o aplicativo front-end.

### Executando o Back-End

1. No terminal, a partir do diretório raiz do projeto, execute o seguinte comando para iniciar o servidor back-end:

```bash
yarn dev
```

2. O servidor será iniciado na porta especificada no arquivo `.env`. Verifique o console para obter informações sobre a porta em que o servidor está sendo executado.

### Executando o Front-End

1. Abra outro terminal e navegue até a pasta `front` no diretório raiz do projeto.

2. Execute o seguinte comando para iniciar o aplicativo front-end:

```bash
yarn start
```

3. O aplicativo será iniciado e abrirá automaticamente no seu navegador padrão. Se isso não acontecer, você pode acessá-lo manualmente em [http://localhost:3000](http://localhost:3000).

## Uso do Sistema

### Autenticação de Cliente

-  Para acessar as rotas relacionadas aos clientes e contatos, é necessário autenticar como cliente. Para fazer isso, você pode usar a rota `/login` com um método `POST` e fornecer as credenciais de autenticação do cliente.

### Rotas

A seguir, estão listadas as rotas disponíveis no sistema e as operações que podem ser realizadas através delas.

#### Rota `/login` (Cliente)

-  **POST**: Realiza a autenticação do cliente. É necessário fornecer as credenciais do cliente (por exemplo, nome de usuário e senha) para obter um token de autenticação válido.

#### Rota `/clients`

-  **POST**: Cria um novo cliente. Os dados do cliente devem ser fornecidos no corpo da solicitação.
-  **GET**: Retorna a lista de clientes cadastrados.
-  **GET /relatory**: Gera um relatório de clientes com seus contatos associados. O relatório pode ser exibido na tela ou baixado em formato PDF.
-  **DELETE /:id**: Exclui um cliente com base no ID fornecido.
-  **PATCH /:id**: Atualiza os dados de um cliente com base no ID fornecido. Os novos dados do cliente devem ser fornecidos no corpo da solicitação.

#### Rota `/contacts`

-  **POST**: Cria um novo contato associado a um cliente autenticado. Os dados do contato devem ser fornecidos no corpo da solicitação.
-  **GET**: Retorna a lista de contatos associados ao cliente autenticado.
-  **DELETE /:id**: Exclui um contato com base no ID fornecido.
-  **PATCH /:id**: Atualiza os dados de um contato com base no ID fornecido. Os novos dados do contato devem ser fornecidos no corpo da solicitação.

## Considerações Finais

Esta documentação fornece uma visão geral detalhada do projeto full stack de cadastro de clientes. Certifique-se de seguir as etapas de instalação e execução descritas anteriormente para configurar corretamente o projeto em seu ambiente de desenvolvimento.