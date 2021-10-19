CREATE DATABASE IF NOT EXISTS foodTruckFinder;
USE foodTruckFinder;

DROP TABLE IF EXISTS User;

CREATE TABLE User
(
    Username VARCHAR(30),
    Password VARCHAR(30),
    AccountType VARCHAR(11)
);

INSERT INTO User ( Username, Password, AccountType)
VALUES ('test1', '123', 'Authorized'),
       ('test2', '123', 'Owner');