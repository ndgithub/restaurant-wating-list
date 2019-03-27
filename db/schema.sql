CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE customers (

id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
size varchar(255) NOT NULL,
check_in_time BIGINT NOT NULL,
seated BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);



