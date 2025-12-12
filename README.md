# 🧠 Ask Me – API para Gerenciamento de Dúvidas e Respostas

### **Autor:** Gabriel Henrique Ribas  
### **URL da API em Produção:** https://ask-me-u8tk.onrender.com  
### **Documentação Swagger:** https://ask-me-u8tk.onrender.com/v1/docs

---

## 📘 Descrição do Projeto

**Ask Me** é uma API REST desenvolvida com **NestJS**, criada para gerenciar dúvidas enviadas pelos usuários e suas respectivas respostas.  
O sistema utiliza arquitetura modular, validações com DTOs, versionamento, Prisma ORM, banco de dados relacional, cache e documentação via Swagger.

---

## Como Executar o Projeto Localmente

#### Pré-requisitos

- Node.js v18+
- NPM v9+
- PostgreSQL v14+

#### Instalação das Dependências


  ```bash
    git clone https://github.com/gabrielribasdev/ask-me.git
    cd ask-me
    npm install
  ```


#### Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto contendo:

  ```env
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/duvidasdb"
    JWT_SECRET="sua_chave_jwt_aqui"
  ```

#### Configuração do Banco de Dados

Aplicar as migrations:

  ```bash
    npx prisma migrate dev
  ```

#### Executando o Projeto

Modo desenvolvimento:
  ```bash
    npm run start:dev
  ```
Modo produção:
  ```bash
    npm run build
    npm run start:prod
  ```


##### Acessos locais:

**API:** http://localhost:3000

**Swagger:** http://localhost:3000/v1/docs

![alt text](erd.png)

#### Checklist de Requisitos

##### RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS.

  [X] ID1: O aluno configurou corretamente o ambiente de desenvolvimento e criou a API utilizando NestJS, com rotas e controladores que seguem a arquitetura modular.

  [X] ID2: O aluno aplicou boas práticas de organização da lógica de negócios, garantindo que os services contenham a lógica de negócio e sejam chamados pelos controladores, separando responsabilidades corretamente.

  [X] ID3: O aluno utilizou providers e configurou adequadamente a injeção de dependência no NestJS, garantindo uma arquitetura modular e escalável.

  [X] ID4: O aluno demonstrou a habilidade de criar e manipular rotas HTTP, manipulando parâmetros de rota, query e body, lidando corretamente com requisições e respostas.

  [X] ID5: O aluno aplicou boas práticas de tratamento de erros, utilizando filtros globais e personalizando as mensagens de erro para garantir respostas claras e consistentes.

  [X] ID6: O aluno criou classes DTO (Data Transfer Objects) para garantir a validação e consistência dos dados em diferentes endpoints, utilizando pipes para validar entradas de dados.

  [X] ID7: O aluno aplicou corretamente pipes de validação no NestJS, verificando entradas inválidas e assegurando a integridade dos dados transmitidos

##### RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM.

  [X] ID8: O aluno modelou corretamente os dados da aplicação, definindo entidades, suas relações e campos necessários, refletidos em um Diagrama de Entidade-Relacionamento (ERD).

  [X] ID9: O aluno configurou e conectou a API a um banco de dados relacional (PostgreSQL, MySQL, etc.) utilizando Prisma ou TypeORM.

  [X] ID11: O aluno implementou corretamente as operações CRUD (Create, Read, Update, Delete) para pelo menos uma entidade no projeto, utilizando NestJS.


RA4 - Gerar a documentação da API e realizar o deploy em um ambiente de produção.

  [X] ID14: O aluno integrou corretamente o Swagger à API, gerando a documentação completa e interativa dos endpoints, parâmetros e respostas da API, com exemplos de requisições e respostas.
    
  [X] ID15: O aluno realizou o deploy da API em uma plataforma de hospedagem na nuvem (ex.: Render.com, Heroku, Vercel, etc.), garantindo que a API estivesse acessível publicamente.
    
  [X] ID16: O aluno garantiu que a API funcionasse corretamente no ambiente de produção, incluindo a documentação Swagger e o banco de dados.
    
  [X] ID17: O aluno realizou a configuração correta de variáveis de ambiente usando o ConfigModule do NestJS.
    
  [X] ID18: O aluno implementou corretamente o versionamento de APIs REST no NestJS, assegurando que diferentes versões da API pudessem coexistir.

##### RA5 - Implementar autenticação, autorização e segurança em APIs utilizando JWT, Guards, Middleware e Interceptadores.

  [] ID19: O aluno configurou a autenticação na API utilizando JWT (JSON Web Tokens).
    
  [] ID20: O aluno implementou controle de acesso baseado em roles e níveis de permissão, utilizando Guards para verificar permissões em rotas específicas.
    
  [X] ID21: O aluno configurou e utilizou middleware para manipular requisições antes que elas chegassem aos controladores, realizando tarefas como autenticação, logging ou tratamento de CORS.
    
  [] ID22: O aluno implementou interceptadores para realizar logging ou modificar as respostas antes de enviá-las ao cliente.

##### REC : Implementação de Cache:

  [X] O aluno deve adicionar uma camada de cache na API, usando uma ferramenta como Redis ou a cache nativa do NestJS, para otimizar as operações de leitura e melhorar o desempenho.


##### Bônus: 
  [X] Desenvolvimento do Frontend;
  
  [X] Publicação e Monetização da API no RapidAPI;