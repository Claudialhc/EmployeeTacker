DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL, 
first_name VARCHAR(40),
last_name VARCHAR(40),
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);
CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(60),
salary DECIMAL(10,2),
department_id INT,
PRIMARY KEY (id) -- this will change to foreign key --
);
CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL, 
name VARCHAR(50),
PRIMARY KEY (id) -- this will change to foreign key --
);

