Projeto Integrador - Jogo Mario Web

O projeto:

Este projeto foi desenvolvido como parte do Projeto Integrador do SENAC, com foco na criação de uma aplicação web completa utilizando front-end, back-end e banco de dados.
O sistema foca em um jogo inspirado no Mario, onde o usuário pode se cadastrar, realizar login, jogar e ter sua pontuação armazenada em um ranking online.
O objetivo é aplicar conceitos de desenvolvimento full stack, incluindo autenticação de usuários, integração com banco de dados e lógica de jogo no navegador. !!!!

Principais Funcionalidades (Backend):

• Cadastro de usuários com criptografia de senha (bcrypt)
• Login com validação de credenciais
• Armazenamento de pontuação no banco de dados
• Sistema de ranking (Top 10 jogadores)
• Atualização de recorde (só salva se for maior)
• Integração entre front-end e back-end via API REST
• Proteção básica contra erros de requisição


Arquitetura do Banco de Dados:

O projeto utiliza MySQL como banco de dados, com estrutura simples e eficiente para armazenar usuários e pontuações.
O banco foi feito para garantir integridade dos dados e permitir consultas rápidas para o ranking.


Tecnologias usadas:

• Node.js
• Express
• MySQL
• JavaScript
• HTML e CSS
• bcrypt 

Back end:
O back-end foi desenvolvido utilizando Node.js com Express, responsável por gerenciar as rotas da aplicação e comunicação com o banco de dados.

Principais rotas:

• POST /registro → cadastra usuário
• POST /login → autentica usuário
• POST /salvar-pontuacao → salva pontuação
• GET /ranking → retorna top 10 jogadores

Front end :
O front-end foi desenvolvido com HTML, CSS e JavaScript puro.

Foram utilizados:

• Manipulação do DOM
• Fetch API para comunicação com o servidor
• LocalStorage para manter usuário logado

O jogo foi implementado com lógica de colisão, pontuação e animações.

O sistema é todo responsivo













![IMG-20260407-WA0054](https://github.com/user-attachments/assets/8994a925-ed71-41b5-836a-48eeccf393e0)
![IMG-20260407-WA0053](https://github.com/user-attachments/assets/7b589dcc-473a-405b-8b02-ea14cca54e30)








https://www.figma.com/design/tP8euih8DXBdY1SAciNJjU/Projeto-integrador?node-id=0-1&p=f&m=draw






<img width="779" height="869" alt="imagem (2)" src="https://github.com/user-attachments/assets/7d8c94ae-f743-4a9b-9f5c-164b3df023bc" />


<img width="753" height="854" alt="imagem" src="https://github.com/user-attachments/assets/c4ffb10d-2b78-4e5b-8c78-09b478499ab9" />


<img width="656" height="878" alt="imagem (1)" src="https://github.com/user-attachments/assets/659dfd44-74bf-4760-a1ed-d75e397c9e7b" />














[jogo_mario.sql](https://github.com/user-attachments/files/26581976/jogo_mario.sql)-- phpMyAdmin SQL Dump
-














