-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Dez-2020 às 20:47
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categorias` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(60) NOT NULL,
  PRIMARY KEY (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id_categorias`, `categoria`) VALUES
(1, 'Geladeiras'),
(2, 'Fogões'),
(3, 'Microondas'),
(4, 'Lavadoras de Roupas'),
(5, 'Lava-louças'),
(6, 'Computadores');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `msg` varchar(300) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `email`, `msg`, `data`) VALUES
(7, 'David', 'david@dgsdev.com', 'Tudo bem? Parcela em 100 parcelas o PS5? ;)', '2020-10-31 00:32:29'),
(23, 'Daniel', 'daniel@dgsdev.com', 'Olá tudo bem? Aceita pagamento boleto?', '2020-11-03 01:46:39'),
(26, 'React', 'react@react.com', 'Olá Front-end!', '2020-12-04 22:47:09');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `endereco` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `produto` varchar(100) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `quantidade` int NOT NULL,
  `preco_total` decimal(8,2) NOT NULL,
  `dia` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`id`, `cliente`, `endereco`, `telefone`, `produto`, `preco`, `quantidade`, `preco_total`, `dia`) VALUES
(1, 'Douglas', 'RUA B', '11-55552-9999', 'Micro-ondas Consul 32 Litros inox', '2500.00', 1, '2500.00', '2020-12-06 00:48:25'),
(2, 'Mayk', 'Rua Brasil 292', '11-98888-5555', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1700.00', 2, '3400.00', '2020-12-06 00:48:25'),
(3, 'Ana', 'Avenida Paulista 2556', '11-95555-2222', 'Micro-ondas Consul 32 Litros inox', '1800.00', 3, '5400.00', '2020-12-06 00:48:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_categorias` int NOT NULL,
  `descricao` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL,
  `imagem` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categorias_idx` (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `id_categorias`, `descricao`, `preco`, `preco_venda`, `imagem`) VALUES
(14, 1, 'Geladeira Frost Free Brastemp Side Inverse 540L', '6389.00', '5019.00', './assets/geladeiraprata.jpeg'),
(15, 1, 'Geladeira Frost Free Brastemp Branca 375 Litros', '2068.60', '1910.90', './assets/geladeira.jpg'),
(16, 1, 'Geladeira Frost Free Consul Prata 340 Litros', '2199.00', '2069.00', './assets/geladeiraprata2.jpg'),
(17, 2, 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1299.00', '1129.00', './assets/FogãoPequeno.jpeg'),
(18, 2, 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático', '600.00', '519.70', './assets/fogão.jpeg'),
(19, 3, 'Micro-ondas Consul 32 Litros inox', '580.00', '409.88', './assets/micro.jpeg'),
(20, 3, 'Microondas 25L Espelhado Philco', '508.70', '464.53', './assets/micro2.jpeg'),
(21, 3, 'Forno de Microondas Eletrolux 20L', '1299.00', '1129.00', './assets/microondas.jpeg'),
(22, 4, 'Lavadoura de Roupas Brastemp 11KG com Turbo Performance Branca', '1699.00', '1214.10', './assets/lavalouça1.jpeg'),
(23, 4, 'Lavadoura de Roupas', '2399.00', '2179.90', './assets/lavalouça2.jpeg'),
(24, 5, 'Lava-louça Eletrolux Inox com 10 serviços, 06 Programas de Lavagem e Painel Blue Touch', '3599.00', '2799.90', './assets/lavadora.jpeg'),
(25, 5, 'Lava Louça Compacta, 8 Serviços Branca 127V', '1970.50', '1730.61', './assets/secadora.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
