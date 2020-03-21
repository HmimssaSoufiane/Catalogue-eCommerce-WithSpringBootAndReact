-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2020 at 11:25 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_articles`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--


INSERT INTO `categorie` (`refCat`, `cat`) VALUES
(1, 'JAZZ'),
(2, 'GNAWA'),
(3, 'Blues'),
(4, 'Rock'),
(5, 'Rhythm '),
(6, 'Country music');


INSERT INTO `client` (`Id`, `Email`, `Nom`, `Prenom`, `Adresse`, `CodePostal`, `Ville`, `Tel`, `MotPasse`) VALUES
(1, 'Hmimssa@gmail.com', 'Hmimssa', 'Soufiane', '1234 Main St', '64000', 'safi', '0655 55 55 55', 'Este@2020'),
(2, 'Adam@gmail.com', 'Adam', 'Mhirig', '1234 Main St', '2020', 'Safi', '0655 55 55 55', 'Este@2020'),
(3, 'Daouidi@gmail.com', 'Youness', 'Daouidi', '1234 Main St', '450222', 'Safi', '0655 55 55 55', 'Este@2020'),
(7, 'Youssef@gmail.com', 'Youssef', 'Radyine', '1234 Bloc C Tanger', '65751', 'Tanger', '0655 55 55 55', 'Este@2020'),
(19, 'Dada@gmail.com', 'Dada', 'Mouhssin', '1234 Main St', '241584', 'Safi ', '0655 55 55 55', 'Este@2020'),
(20, 'Flouky@gmail.com', 'Flouky', 'Saad', '1234 Main St', '2558', 'Safi', '0655 55 55 55', 'Este@2020');

--
-- Dumping data for table `articles`
--

INSERT INTO `article` (`codeArticle`, `designation`, `prix`, `stock`, `categorie`, `photo`) VALUES
(1, 'Travel , Pat Metheny', 300, 50, 1, ''),
(2, 'Dave Brubeck Take Five', 700, 70, 1, ''),
(3, 'Gerry Mulligan Round Midnight', 800, 30, 1, ''),
(4, 'Gania , Maalem Mahmoud', 500, 20, 2, ''),
(5, 'Gift of the Gnawa ,Hassan Hakmoun', 350, 10, 2, ''),
(6, 'Gania , Maalem Mahmoud', 500, 20, 2, ''),
(7, 'Gift of the Gnawa ,Hassan Hakmoun', 350, 10, 2, ''),
(8, ' Nuits de Fourvière  , Gnawa Diffusion', 640, 60, 2, ''),
(9, ' Nuits de Fourvière  , Gnawa Diffusion', 640, 60, 2, '');

