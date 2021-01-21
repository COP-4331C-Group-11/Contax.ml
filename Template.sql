-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb-server
-- Generation Time: Jan 19, 2021 at 04:56 AM
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
CREATE DATABASE IF NOT EXISTS `Contax`;
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
  `last` varchar(128) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(128) NOT NULL,
  `dateCreated` date NOT NULL
);

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `userId`, `firstName`, `last`, `phone`, `email`, `dateCreated`) VALUES
(1, 1, 'patrick', 'star', '4206942069', 'patrickstar@gmail.com', '2021-01-06');

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
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `dateFirstOn`, `dateLastOn`, `username`, `password`) VALUES
(1, 'Rick', 'Scott', '2020-12-12', '2020-12-13', 'rickscott', 'super-secret-password');

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
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `contacts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
