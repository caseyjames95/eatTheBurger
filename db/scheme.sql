DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE pizza_db;

USE burger_db;

CREATE TABLE burger (
    id INT AUTOINCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    eaten BOOLEAN NOT NULL DEFAULT 0
);