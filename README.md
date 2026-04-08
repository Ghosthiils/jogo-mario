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
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/04/2026 às 01:05
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `jogo_mario`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogadores`
--

CREATE TABLE `jogadores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `pontos` int(11) DEFAULT 0,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `jogadores`
--

INSERT INTO `jogadores` (`id`, `nome`, `pontos`, `data_criacao`) VALUES
(1, 'Luiz', 2961, '2026-03-16 23:18:25'),
(2, 'Mario', 300, '2026-03-16 23:19:04'),
(3, 'Emerson maracuja', 100, '2026-03-16 23:22:02'),
(4, 'Henrique da Rita', 400, '2026-03-16 23:23:14'),
(5, 'Gabriel HotWheels', 500, '2026-03-16 23:25:09'),
(6, 'HENRIQUE', 755, '2026-03-20 23:37:00'),
(7, 'roberto', 6827, '2026-03-21 01:24:24');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'luiz', 'luiz.ffsouza5@senacsp.edu.br', '$2b$10$8uowgb6t4hYTUURpOkTc/.o1lyouDDXSQO8zzGPfxy1YfnZ14Slsa'),
(2, 'HENRIQUE', 'admin@admin.com.br', '$2b$10$yenacc3uRNKHvGwN7LX76.9I6o4ufaAqNhJPzbSlvzcm7Qjddlj/O'),
(3, 'roberto', 'luizfranca35mc@gmail.com', '$2b$10$p0o9Bh/rcC6T2I3aYXcobeKM.cyLuHG26rLZzqdmz5u2futZCl87S'),
(4, 'Xaolim', 'luizfranca35mc@gmail.com.br', '$2b$10$9JxX183llJLvwAVRPrxMOeQbShJN4vp.lMDTIX8Xxkkdkt6ps.B3y'),
(11, 'Xaolim', 'shampo.123@gmail.com', '$2b$10$t7tV7atLY1G5s5l5dYicnujv79UJW8/ek3OZHVLaWZhLFqQDie9sS'),
(12, 'JORGINHO', 'palmeiras123@gmail.com', '$2b$10$.qC9Z1ZcrqIIXIjgpEbp0.MTAocO4L8fnVkQhQS0Juh40r4xTU5Ua'),
(13, 'fdsdsfds', 'toks_lol@hotmail.com', '$2b$10$X05Dt66eI.Ls6ky2RFv1LeetqEFhY94dkwfMS53f/AmdpXQiin6lS'),
(14, 'neymar', 'neymar.123@gmail.com.br', '$2b$10$lcjVvT2GliwD8xC.4RGcNuHZBCm6cG98VuMNxxi4Rxi24EQ5tCF6K');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `jogadores`
--
ALTER TABLE `jogadores`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jogadores`
--
ALTER TABLE `jogadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
















