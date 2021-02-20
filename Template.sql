-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb-server
-- Generation Time: Feb 20, 2021 at 03:23 AM
-- Server version: 10.1.48-MariaDB-1~bionic
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Contax`
--
CREATE DATABASE IF NOT EXISTS `Contax` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Contax`;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int(12) NOT NULL,
  `userId` int(12) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(128) NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `userId`, `firstName`, `lastName`, `phone`, `email`, `dateCreated`) VALUES
(15, 10, 'Lebron', 'James', '4074206910', 'lebron@james.com', '2021-02-20'),
(16, 10, 'Lebron', 'James', '4074206913', 'lebron@james.com', '2021-02-20'),
(17, 10, 'Lebron', 'James', '4074206914', 'lebron@james.com', '2021-02-20'),
(18, 10, 'Lebron', 'James', '4074206915', 'lebron@james.com', '2021-02-20'),
(19, 10, 'Lebron', 'James', '4074206912', 'lebron@james.com', '2021-02-20'),
(20, 10, 'Lebron', 'James', '4074206911', 'lebron@james.com', '2021-02-20'),
(21, 10, 'Lebron', 'James', '4074206916', 'lebron@james.com', '2021-02-20'),
(22, 10, 'Lebron', 'James', '4074206917', 'lebron@james.com', '2021-02-20'),
(23, 10, 'Lebron', 'James', '4074206918', 'lebron@james.com', '2021-02-20'),
(24, 10, 'Lebron', 'James', '4074206919', 'lebron@james.com', '2021-02-20'),
(25, 10, 'Lebron', 'James', '4074206920', 'lebron@james.com', '2021-02-20'),
(26, 10, 'Lebron', 'James', '4074206921', 'lebron@james.com', '2021-02-20'),
(27, 10, 'Lebron', 'James', '4074206922', 'lebron@james.com', '2021-02-20'),
(28, 10, 'Lebron', 'James', '4074206923', 'lebron@james.com', '2021-02-20'),
(29, 10, 'Lebron', 'James', '4074206925', 'lebron@james.com', '2021-02-20'),
(30, 10, 'Lebron', 'James', '4074206924', 'lebron@james.com', '2021-02-20'),
(31, 10, 'Lebron', 'James', '4074206927', 'lebron@james.com', '2021-02-20'),
(32, 10, 'Lebron', 'James', '4074206928', 'lebron@james.com', '2021-02-20'),
(33, 10, 'Lebron', 'James', '4074206926', 'lebron@james.com', '2021-02-20'),
(34, 10, 'Lebron', 'James', '4074206929', 'lebron@james.com', '2021-02-20'),
(35, 10, 'Lebron', 'James', '4074206931', 'lebron@james.com', '2021-02-20'),
(36, 10, 'Lebron', 'James', '4074206930', 'lebron@james.com', '2021-02-20'),
(37, 10, 'Lebron', 'James', '4074206933', 'lebron@james.com', '2021-02-20'),
(38, 10, 'Lebron', 'James', '4074206932', 'lebron@james.com', '2021-02-20'),
(39, 10, 'Lebron', 'James', '4074206934', 'lebron@james.com', '2021-02-20'),
(40, 10, 'Lebron', 'James', '4074206935', 'lebron@james.com', '2021-02-20'),
(41, 10, 'Lebron', 'James', '4074206936', 'lebron@james.com', '2021-02-20'),
(42, 10, 'Lebron', 'James', '4074206939', 'lebron@james.com', '2021-02-20'),
(43, 10, 'Lebron', 'James', '4074206937', 'lebron@james.com', '2021-02-20'),
(44, 10, 'Lebron', 'James', '4074206938', 'lebron@james.com', '2021-02-20'),
(45, 10, 'Lebron', 'James', '4074206940', 'lebron@james.com', '2021-02-20'),
(46, 10, 'Lebron', 'James', '4074206941', 'lebron@james.com', '2021-02-20'),
(47, 10, 'Lebron', 'James', '4074206942', 'lebron@james.com', '2021-02-20'),
(48, 10, 'Lebron', 'James', '4074206945', 'lebron@james.com', '2021-02-20'),
(49, 10, 'Lebron', 'James', '4074206947', 'lebron@james.com', '2021-02-20'),
(50, 10, 'Lebron', 'James', '4074206943', 'lebron@james.com', '2021-02-20'),
(51, 10, 'Lebron', 'James', '4074206946', 'lebron@james.com', '2021-02-20'),
(52, 10, 'Lebron', 'James', '4074206944', 'lebron@james.com', '2021-02-20'),
(53, 10, 'Lebron', 'James', '4074206953', 'lebron@james.com', '2021-02-20'),
(54, 10, 'Lebron', 'James', '4074206950', 'lebron@james.com', '2021-02-20'),
(55, 10, 'Lebron', 'James', '4074206952', 'lebron@james.com', '2021-02-20'),
(56, 10, 'Lebron', 'James', '4074206948', 'lebron@james.com', '2021-02-20'),
(57, 10, 'Lebron', 'James', '4074206951', 'lebron@james.com', '2021-02-20'),
(58, 10, 'Lebron', 'James', '4074206949', 'lebron@james.com', '2021-02-20'),
(59, 10, 'Lebron', 'James', '4074206954', 'lebron@james.com', '2021-02-20'),
(60, 10, 'Lebron', 'James', '4074206959', 'lebron@james.com', '2021-02-20'),
(61, 10, 'Lebron', 'James', '4074206957', 'lebron@james.com', '2021-02-20'),
(62, 10, 'Lebron', 'James', '4074206958', 'lebron@james.com', '2021-02-20'),
(63, 10, 'Lebron', 'James', '4074206956', 'lebron@james.com', '2021-02-20'),
(64, 10, 'Lebron', 'James', '4074206955', 'lebron@james.com', '2021-02-20'),
(65, 10, 'Lebron', 'James', '4074206960', 'lebron@james.com', '2021-02-20'),
(66, 10, 'Lebron', 'James', '4074206963', 'lebron@james.com', '2021-02-20'),
(67, 10, 'Lebron', 'James', '4074206962', 'lebron@james.com', '2021-02-20'),
(68, 10, 'Lebron', 'James', '4074206964', 'lebron@james.com', '2021-02-20'),
(69, 10, 'Lebron', 'James', '4074206965', 'lebron@james.com', '2021-02-20'),
(70, 10, 'Lebron', 'James', '4074206961', 'lebron@james.com', '2021-02-20'),
(71, 10, 'Lebron', 'James', '4074206966', 'lebron@james.com', '2021-02-20'),
(72, 10, 'Lebron', 'James', '4074206969', 'lebron@james.com', '2021-02-20'),
(73, 10, 'Lebron', 'James', '4074206968', 'lebron@james.com', '2021-02-20'),
(74, 10, 'Lebron', 'James', '4074206967', 'lebron@james.com', '2021-02-20'),
(75, 10, 'Lebron', 'James', '4074206971', 'lebron@james.com', '2021-02-20'),
(76, 10, 'Lebron', 'James', '4074206970', 'lebron@james.com', '2021-02-20'),
(77, 10, 'Lebron', 'James', '4074206972', 'lebron@james.com', '2021-02-20'),
(78, 10, 'Lebron', 'James', '4074206973', 'lebron@james.com', '2021-02-20'),
(79, 10, 'Lebron', 'James', '4074206974', 'lebron@james.com', '2021-02-20'),
(80, 10, 'Lebron', 'James', '4074206975', 'lebron@james.com', '2021-02-20'),
(81, 10, 'Lebron', 'James', '4074206976', 'lebron@james.com', '2021-02-20'),
(82, 10, 'Lebron', 'James', '4074206977', 'lebron@james.com', '2021-02-20'),
(83, 10, 'Lebron', 'James', '4074206978', 'lebron@james.com', '2021-02-20'),
(84, 10, 'Lebron', 'James', '4074206980', 'lebron@james.com', '2021-02-20'),
(85, 10, 'Lebron', 'James', '4074206983', 'lebron@james.com', '2021-02-20'),
(86, 10, 'Lebron', 'James', '4074206981', 'lebron@james.com', '2021-02-20'),
(87, 10, 'Lebron', 'James', '4074206984', 'lebron@james.com', '2021-02-20'),
(88, 10, 'Lebron', 'James', '4074206982', 'lebron@james.com', '2021-02-20'),
(89, 10, 'Lebron', 'James', '4074206979', 'lebron@james.com', '2021-02-20'),
(90, 10, 'Lebron', 'James', '4074206985', 'lebron@james.com', '2021-02-20'),
(91, 10, 'Lebron', 'James', '4074206986', 'lebron@james.com', '2021-02-20'),
(92, 10, 'Lebron', 'James', '4074206988', 'lebron@james.com', '2021-02-20'),
(93, 10, 'Lebron', 'James', '4074206987', 'lebron@james.com', '2021-02-20'),
(94, 10, 'Lebron', 'James', '4074206990', 'lebron@james.com', '2021-02-20'),
(95, 10, 'Lebron', 'James', '4074206989', 'lebron@james.com', '2021-02-20'),
(96, 10, 'Lebron', 'James', '4074206991', 'lebron@james.com', '2021-02-20'),
(97, 10, 'Lebron', 'James', '4074206995', 'lebron@james.com', '2021-02-20'),
(98, 10, 'Lebron', 'James', '4074206996', 'lebron@james.com', '2021-02-20'),
(99, 10, 'Lebron', 'James', '4074206994', 'lebron@james.com', '2021-02-20'),
(100, 10, 'Lebron', 'James', '4074206992', 'lebron@james.com', '2021-02-20'),
(101, 10, 'Lebron', 'James', '4074206993', 'lebron@james.com', '2021-02-20'),
(102, 10, 'Lebron', 'James', '4074206997', 'lebron@james.com', '2021-02-20'),
(103, 10, 'Lebron', 'James', '4074206998', 'lebron@james.com', '2021-02-20'),
(104, 10, 'Lebron', 'James', '4074206999', 'lebron@james.com', '2021-02-20'),
(105, 11, 'Milurd', 'Petulah', '4074206911', 'email@example.com', '2021-02-20'),
(106, 11, 'Melentha', 'Frederico', '4074206910', 'email@example.com', '2021-02-20'),
(107, 11, 'Barkley', 'Delcine', '4074206912', 'email@example.com', '2021-02-20'),
(108, 11, 'Shamrao', 'Leeth', '4074206913', 'email@example.com', '2021-02-20'),
(109, 11, 'Arley', 'Ulu', '4074206914', 'email@example.com', '2021-02-20'),
(110, 11, 'Woodhouse', 'Cassady', '4074206915', 'email@example.com', '2021-02-20'),
(111, 11, 'Philcox', 'Jacie', '4074206916', 'email@example.com', '2021-02-20'),
(112, 11, 'Lund', 'Petra', '4074206918', 'email@example.com', '2021-02-20'),
(113, 11, 'Pasahow', 'Rashidi', '4074206919', 'email@example.com', '2021-02-20'),
(114, 11, 'Jenelle', 'Calvinna', '4074206917', 'email@example.com', '2021-02-20'),
(115, 11, 'Justino', 'Spiro', '4074206920', 'email@example.com', '2021-02-20'),
(116, 11, 'Nanon', 'Maupin', '4074206921', 'email@example.com', '2021-02-20'),
(117, 11, 'Rachelle', 'Bathsheeb', '4074206922', 'email@example.com', '2021-02-20'),
(118, 11, 'Buskus', 'Alake', '4074206923', 'email@example.com', '2021-02-20'),
(119, 11, 'Ivonne', 'Tersina', '4074206924', 'email@example.com', '2021-02-20'),
(120, 11, 'Tena', 'Reede', '4074206925', 'email@example.com', '2021-02-20'),
(121, 11, 'Ash', 'Alitta', '4074206926', 'email@example.com', '2021-02-20'),
(122, 11, 'Marola', 'Resor', '4074206927', 'email@example.com', '2021-02-20'),
(123, 11, 'Maffa', 'Shenan', '4074206928', 'email@example.com', '2021-02-20'),
(124, 11, 'Barkley', 'Lorn', '4074206929', 'email@example.com', '2021-02-20'),
(125, 11, 'Kylila', 'Rozalin', '4074206930', 'email@example.com', '2021-02-20'),
(126, 11, 'Bernette', 'Bullen', '4074206931', 'email@example.com', '2021-02-20'),
(127, 11, 'Savior', 'Barnum', '4074206934', 'email@example.com', '2021-02-20'),
(128, 11, 'Festa', 'Chanda', '4074206933', 'email@example.com', '2021-02-20'),
(129, 11, 'Gathard', 'Binette', '4074206932', 'email@example.com', '2021-02-20'),
(130, 11, 'Apple', 'Sofko', '4074206936', 'email@example.com', '2021-02-20'),
(131, 11, 'Anabelle', 'Siberson', '4074206935', 'email@example.com', '2021-02-20'),
(132, 11, 'Xenia', 'Thaxter', '4074206937', 'email@example.com', '2021-02-20'),
(133, 11, 'Neslund', 'Cartie', '4074206938', 'email@example.com', '2021-02-20'),
(134, 11, 'Rubie', 'Beach', '4074206939', 'email@example.com', '2021-02-20'),
(135, 11, 'Darice', 'Kaufman', '4074206940', 'email@example.com', '2021-02-20'),
(136, 11, 'Roper', 'Donall', '4074206941', 'email@example.com', '2021-02-20'),
(137, 11, 'Ashwin', 'Stein', '4074206942', 'email@example.com', '2021-02-20'),
(138, 11, 'Devol', 'Thurlough', '4074206943', 'email@example.com', '2021-02-20'),
(139, 11, 'Mecke', 'Atworth', '4074206944', 'email@example.com', '2021-02-20'),
(140, 11, 'Fayre', 'Yim', '4074206945', 'email@example.com', '2021-02-20'),
(141, 11, 'Luhe', 'Fonda', '4074206946', 'email@example.com', '2021-02-20'),
(142, 11, 'Khalsa', 'Geralda', '4074206948', 'email@example.com', '2021-02-20'),
(143, 11, 'Carin', 'Orfield', '4074206947', 'email@example.com', '2021-02-20'),
(144, 11, 'Favrot', 'Heidie', '4074206950', 'email@example.com', '2021-02-20'),
(145, 11, 'Winston', 'Landel', '4074206949', 'email@example.com', '2021-02-20'),
(146, 11, 'Glick', 'Ashman', '4074206951', 'email@example.com', '2021-02-20'),
(147, 11, 'Kiyohara', 'Gibbs', '4074206952', 'email@example.com', '2021-02-20'),
(148, 11, 'Katie', 'Kruse', '4074206953', 'email@example.com', '2021-02-20'),
(149, 11, 'Bacon', 'Darrick', '4074206954', 'email@example.com', '2021-02-20'),
(150, 11, 'Willey', 'Aunson', '4074206955', 'email@example.com', '2021-02-20'),
(151, 11, 'Adelind', 'Kylah', '4074206956', 'email@example.com', '2021-02-20'),
(152, 11, 'Warthman', 'Peonir', '4074206957', 'email@example.com', '2021-02-20'),
(153, 11, 'Perreault', 'Pazia', '4074206958', 'email@example.com', '2021-02-20'),
(154, 11, 'Minor', 'Maryann', '4074206959', 'email@example.com', '2021-02-20'),
(155, 11, 'Langham', 'Belva', '4074206962', 'email@example.com', '2021-02-20'),
(156, 11, 'Helve', 'Brebner', '4074206960', 'email@example.com', '2021-02-20'),
(157, 11, 'Verdi', 'Vassily', '4074206964', 'email@example.com', '2021-02-20'),
(158, 11, 'Fiedling', 'Fast', '4074206961', 'email@example.com', '2021-02-20'),
(159, 11, 'Sanbo', 'Thedrick', '4074206963', 'email@example.com', '2021-02-20'),
(160, 11, 'Kalmick', 'Thekla', '4074206965', 'email@example.com', '2021-02-20'),
(161, 11, 'Fredek', 'Chloras', '4074206966', 'email@example.com', '2021-02-20'),
(162, 11, 'Sanburn', 'Baker', '4074206967', 'email@example.com', '2021-02-20'),
(163, 11, 'Allyson', 'Cerallua', '4074206968', 'email@example.com', '2021-02-20'),
(164, 11, 'Blight', 'McFerren', '4074206970', 'email@example.com', '2021-02-20'),
(165, 11, 'Killie', 'Neel', '4074206969', 'email@example.com', '2021-02-20'),
(166, 11, 'Ball', 'Nieberg', '4074206971', 'email@example.com', '2021-02-20'),
(167, 11, 'Llovera', 'Ungley', '4074206972', 'email@example.com', '2021-02-20'),
(168, 11, 'Dickey', 'Whyte', '4074206973', 'email@example.com', '2021-02-20'),
(169, 11, 'Cymbre', 'Oralia', '4074206974', 'email@example.com', '2021-02-20'),
(170, 11, 'Warring', 'Cappella', '4074206975', 'email@example.com', '2021-02-20'),
(171, 11, 'Carlyle', 'Kieran', '4074206976', 'email@example.com', '2021-02-20'),
(172, 11, 'Giorgio', 'Barnaba', '4074206977', 'email@example.com', '2021-02-20'),
(173, 11, 'Dwyer', 'Brewer', '4074206978', 'email@example.com', '2021-02-20'),
(174, 11, 'Hime', 'Affrica', '4074206979', 'email@example.com', '2021-02-20'),
(175, 11, 'Chuipek', 'Hoseia', '4074206982', 'email@example.com', '2021-02-20'),
(176, 11, 'Treulich', 'Beth', '4074206980', 'email@example.com', '2021-02-20'),
(177, 11, 'Anni', 'Franklyn', '4074206981', 'email@example.com', '2021-02-20'),
(178, 11, 'Stokes', 'Amalie', '4074206983', 'email@example.com', '2021-02-20'),
(179, 11, 'Donahoe', 'Battat', '4074206984', 'email@example.com', '2021-02-20'),
(180, 11, 'Lotus', 'Shurlock', '4074206989', 'email@example.com', '2021-02-20'),
(181, 11, 'Alessandra', 'Campagna', '4074206988', 'email@example.com', '2021-02-20'),
(182, 11, 'Natassia', 'Naomi', '4074206987', 'email@example.com', '2021-02-20'),
(183, 11, 'Schaffer', 'Gyimah', '4074206985', 'email@example.com', '2021-02-20'),
(184, 11, 'Roland', 'Kristi', '4074206986', 'email@example.com', '2021-02-20'),
(185, 11, 'Heriberto', 'Devi', '4074206992', 'email@example.com', '2021-02-20'),
(186, 11, 'Weinshienk', 'Conlon', '4074206990', 'email@example.com', '2021-02-20'),
(187, 11, 'Cly', 'Eshman', '4074206995', 'email@example.com', '2021-02-20'),
(188, 11, 'Kimberley', 'Janna', '4074206993', 'email@example.com', '2021-02-20'),
(189, 11, 'Naresh', 'Lilia', '4074206994', 'email@example.com', '2021-02-20'),
(190, 11, 'Risa', 'Giraldo', '4074206991', 'email@example.com', '2021-02-20'),
(191, 11, 'Cressi', 'Tiffa', '4074206996', 'email@example.com', '2021-02-20'),
(192, 11, 'Essinger', 'Earvin', '4074206998', 'email@example.com', '2021-02-20'),
(193, 11, 'Mun', 'Lulita', '4074206997', 'email@example.com', '2021-02-20'),
(194, 12, 'Mary', 'Joe', '4072206655', 'maryjoe@hotmail.com', '2021-02-19');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `dateFirstOn` date NOT NULL,
  `dateLastOn` date NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `dateFirstOn`, `dateLastOn`, `username`, `password`) VALUES
(9, 'rick', 'scott', '2021-02-19', '2021-02-19', 'rickscott', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'),
(10, 'lebron', 'james', '2021-02-19', '2021-02-19', 'lebron', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'),
(11, 'elongated', 'muskrat', '2021-02-19', '2021-02-19', 'elongatedmuskrat', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'),
(12, 'john', 'johnson', '2021-02-19', '2021-02-19', 'john', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
