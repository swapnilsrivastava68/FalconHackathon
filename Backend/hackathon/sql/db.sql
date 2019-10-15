CREATE TABLE `falcons`.`CUSTOMERDETAIL` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `legalStructure` VARCHAR(45) NULL,
  `lastYearRevenue` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `falcons`.`LOANDETAIL` (
  `ID` INT NOT NULL,
  `Amount` DECIMAL(10,2) NULL DEFAULT 0,
  `usageId` INT NULL,
  `corporateDetailID` INT NULL,
  `personalDetailID` INT NULL,
  PRIMARY KEY (`ID`));

CREATE TABLE `falcons`.`PERSONALDETAIL` (
  `ID` INT NOT NULL,
  `address` VARCHAR(45) NULL,
  `birthDate` Date,
  `phone` VARCHAR(45) NULL,
  `passportNumber` VARCHAR(45) NULL,
  `eMail` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`));

	