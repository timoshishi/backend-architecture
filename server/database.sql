CREATE DATABASE IF NOT EXISTS reviews

CREATE TABLE IF NOT EXISTS review(
review_id serial primary key,
product_id integer,
rating integer,
recommend integer,
helpfulness integer,
summary varchar(150),
body varchar(2000),
response varchar(2000),
reviewer_name varchar(100),
email varchar(100),
reported boolean
)