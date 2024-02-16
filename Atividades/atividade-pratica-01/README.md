
<!-- GETTING STARTED -->
## :rocket: Iniciando

Guia prático de como rodar o projeto localmente.

### Pré-requisitos

É necessário ter instalado no seu computador o [NodeJS](https://nodejs.org/en/) e também um banco de dados para fazer a conexão com a API. 
As configurações de conexão com o banco de dados podem ser alteradas facilmente no arquivo chamado "ormconfig.json" e também no arquivo "index.ts" do diretório "/shared/typeorm/index.ts". 
É importante ressaltar que nesse projeto foi utilizado o banco de dados [Postgresql](https://www.postgresql.org/).

### Instalação e Inicialização

1. Crie o banco de dados
   ```sh
   docker run --name postgres -e POSTGRES_PASSWORD=12345 -p 5433:5433 -d postgres
   ```

2. Rode as migrations
   ```sh
   npm run typeorm migration:run
   ```

2. Instale as dependências
   ```sh
   npm install
   ```
   
3. Inicie a API
   ```sh
   npm run dev
   ```
