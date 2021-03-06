-- MySQL Script generated by MySQL Workbench
-- Tue Dec 26 13:36:28 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db_befit
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_befit
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_befit` DEFAULT CHARACTER SET utf8 ;
USE `db_befit` ;

-- -----------------------------------------------------
-- Table `db_befit`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_befit`.`Cliente` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `dtNasc` DATE NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `rg` VARCHAR(12) NULL,
  `cep` VARCHAR(9) NULL,
  `endereco` VARCHAR(45) NULL,
  `numero` INT NULL,
  `bairro` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `uf` VARCHAR(10) NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `sexo` VARCHAR(1) NOT NULL,
  `deletado` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_befit`.`Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_befit`.`Login` (
  `idLogin` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `deletado` VARCHAR(45) NULL,
  PRIMARY KEY (`idLogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_befit`.`Medida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_befit`.`Medida` (
  `idMedida` INT NOT NULL,
  `altura` VARCHAR(45) NOT NULL,
  `peso` VARCHAR(45) NOT NULL,
  `bracoDireito` VARCHAR(45) NULL,
  `bracoEsquerdo` VARCHAR(45) NULL,
  `antebracoDireito` VARCHAR(45) NULL,
  `antebracoEsquerdo` VARCHAR(45) NULL,
  `ombro` VARCHAR(45) NULL,
  `torax` VARCHAR(45) NULL,
  `cintura` VARCHAR(45) NULL,
  `abdomen` VARCHAR(45) NULL,
  `quadril` VARCHAR(45) NULL,
  `coxaDireita` VARCHAR(45) NULL,
  `coxaEsquerda` VARCHAR(45) NULL,
  `cardiopatia` VARCHAR(45) NULL,
  `panturrilhaDireita` VARCHAR(45) NULL,
  `panturrilhaEsquerda` VARCHAR(45) NULL,
  `osteopatia` VARCHAR(45) NULL,
  `imc` VARCHAR(45) NULL,
  `triceps` VARCHAR(45) NULL,
  `subEscapular` VARCHAR(45) NULL,
  `abdominal` VARCHAR(45) NULL,
  `supraIliaca` VARCHAR(45) NULL,
  `coxa` VARCHAR(45) NULL,
  `panturrilha` VARCHAR(45) NULL,
  `gorduraPercent` VARCHAR(45) NULL,
  `gorduraExc` VARCHAR(45) NULL,
  `gorduraKg` VARCHAR(45) NULL,
  `idealPropPercen` VARCHAR(45) NULL,
  `massaMagra` VARCHAR(45) NULL,
  `riscoCintQuad` VARCHAR(45) NULL,
  `protocolo` VARCHAR(45) NULL,
  `deletado` VARCHAR(45) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idMedida`, `idUsuario`),
  INDEX `fk_Medida_Cliente_idx` (`idUsuario` ASC),
  CONSTRAINT `fk_Medida_Cliente`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `db_befit`.`Cliente` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
