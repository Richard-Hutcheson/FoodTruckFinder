CREATE DATABASE IF NOT EXISTS foodTruckFinder;
USE foodTruckFinder;

DROP TABLE IF EXISTS User;

CREATE TABLE User (
    userID INT(7) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    role CHAR(1),
    PRIMARY KEY (userID)
);

INSERT INTO User ( Username, Password, AccountType)
VALUES ('test1', '123', 'A'),
       ('test2', '123', 'O');