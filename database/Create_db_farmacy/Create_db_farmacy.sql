DROP DATABASE IF EXISTS `farmacy`;
CREATE DATABASE `farmacy`;
USE `farmacy` ;
-- -----------------------------------------------------
-- Table `farmacy`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`))
  ENGINE=InnoDB ;
-- -----------------------------------------------------
-- Table `farmacy`.`farms`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farms`;
CREATE TABLE `farms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `farms_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`))
  ENGINE=InnoDB ; 
-- -----------------------------------------------------
-- Table `farmacy`.`crop_types`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `crop_types`;
CREATE TABLE `crop_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB;
-- -----------------------------------------------------
-- Table `farmacy`.`crops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `crops`;
CREATE TABLE `crops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `crop_type_id` int DEFAULT NULL,
  `farm_id` int DEFAULT NULL,
  `planting_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `crop_type_id` (`crop_type_id`),
  KEY `farm_id` (`farm_id`),
  CONSTRAINT `crops_ibfk_1` FOREIGN KEY (`crop_type_id`) REFERENCES `crop_types` (`id`),
  CONSTRAINT `crops_ibfk_2` FOREIGN KEY (`farm_id`) REFERENCES `farms` (`id`))
  ENGINE=InnoDB ;
-- -----------------------------------------------------
-- Table `farmacy`.`sensor_data`
-- -----------------------------------------------------
CREATE TABLE `sensor_data` (
  `sensor_id` int NOT NULL AUTO_INCREMENT,
  `reading` float NOT NULL,
  `reading_time` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`sensor_id`),
  KEY `sensor_id` (`sensor_id`),
  CONSTRAINT `sensor_data_ibfk_1` FOREIGN KEY (`sensor_id`) REFERENCES `farms` (`id`)ON DELETE CASCADE)
  ENGINE=InnoDB;
