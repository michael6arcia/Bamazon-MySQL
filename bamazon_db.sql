DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT(50) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT(100) NOT NULL,
stock_quantity INT(100) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (01, "apples", "grocery", 0.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (02, "oranges", "grocery", 0.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (03, "milk", "grocery", 4.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (04, "t-shirt", "clothing", 9.99, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (05, "dress", "clothing", 9.99, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (06, "shoes", "clothing", 14.99, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (07, "blanket", "home_goods", 14.99, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (08, "bicycle", "sporting_goods", 99.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (09, "laptop", "electronics", 199.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "television", "electronics", 499.99, 15);