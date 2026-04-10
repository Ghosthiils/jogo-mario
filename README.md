# Jogo Mario Jump

Um jogo web simples inspirado no clássico Mario, desenvolvido como projeto integrador. O jogo inclui sistema de login, registro de usuários, salvamento de pontuações e rankings.

## Descrição

Mario Jump é um jogo de plataforma onde o jogador controla o Mario para pular sobre canos que se movem da direita para a esquerda. O objetivo é sobreviver o máximo possível, acumulando pontos. A velocidade aumenta com o tempo, tornando o jogo mais desafiador.

## Funcionalidades

- **Jogo Principal:** Plataforma com Mario pulando canos, pontuação em tempo real, aumento de velocidade.
- **Sistema de Usuários:** Login e registro com hash de senhas (bcrypt).
- **Salvamento de Pontuações:** Pontuações são salvas no banco de dados, atualizando apenas se for um novo recorde pessoal.
- **Rankings:** Visualização dos top 10 jogadores.
- **Interface:** Menu principal, telas de jogo, login, registro e rankings.
- **Sons e Música:** Efeitos sonoros para pulo, game over e música de fundo.

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MySQL
- **Segurança:** bcrypt para hash de senhas
- **Outros:** CORS para requisições cross-origin, dotenv para variáveis de ambiente

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL Server
- Navegador web moderno

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Ghosthiils/jogo-mario.git
   cd jogo-mario
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   npm install express
   ```
   npm install mysql
   ```
   npm install bcrypt
   ```
   npm install cors
   ```


## Configuração do Banco de Dados

1. Crie um banco de dados MySQL:
   ```sql
   CREATE DATABASE jogo_mario;
   ```

2. Crie as tabelas:
   ```sql
   USE jogo_mario;

   CREATE TABLE usuarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       senha VARCHAR(255) NOT NULL
   );

   CREATE TABLE jogadores (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255) NOT NULL,
       pontos INT NOT NULL
   );
   ```

3. Configure o arquivo `.env`:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=jogo_mario
   PORT=3000
   ```

## Executando o Projeto

1. Inicie o servidor MySQL.

2. Execute o servidor:
   ```bash
   npm start
   ```
   Ou para desenvolvimento (com recarregamento automático):
   ```bash
   npm run dev
   ```

3. Abra `http://localhost:3000` no navegador.

## Como Jogar

- Faça login ou registre-se.
- No menu, clique em "Jogar".
- Pressione qualquer tecla para fazer o Mario pular.
- Evite os canos; se colidir, o jogo termina.
- Pontuação aumenta com o tempo; velocidade acelera a cada 500 pontos.
- Após game over, salve a pontuação e veja rankings.

## Estrutura do Projeto

```
jogo-mario/
├── js/
│   ├── server.js          # Servidor Express
│   ├── index.html         # Menu principal
│   ├── jogo.html          # Página do jogo
│   ├── rankings.html      # Rankings
│   ├── login.html         # Login
│   ├── registro.html      # Registro
│   ├── jogo.js            # Lógica do jogo
│   ├── login.js           # Lógica de login
│   ├── rankings.js        # Lógica de rankings
│   └── registro.js        # Lógica de registro
├── css/
│   ├── style.css          # Estilos gerais
│   ├── menu.css           # Estilos do menu
│   ├── login-registro.css # Estilos de login/registro
│   └── rankings.css       # Estilos de rankings
├── image/                 # Imagens do jogo
├── sounds/                # Sons e música
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── README.md              # Esta documentação
└── LICENSE                # Licença
```

## API Endpoints

- `GET /` - Serve a página inicial (menu)
- `POST /registro` - Registra novo usuário
- `POST /login` - Faz login
- `POST /salvar-pontuacao` - Salva pontuação
- `GET /ranking` - Retorna top 10 rankings

## Contribuição

Contribuições são bem-vindas. Abra issues para bugs ou sugestões, e pull requests para melhorias.

## Licença

ISC License - veja LICENSE para detalhes.
