CREATE DATABASE IF NOT EXISTS reviews

CREATE TABLE IF NOT EXISTS review(review_id serial primary key,
product_id integer,
rating integer,
recommend integer,
helpfulness integer,
summary varchar(150),
body varchar(2000),
response varchar(2000),
reviewer_name varchar(100),
email varchar(100),
reported boolean,
photos text[5]
);

DROP TABLE review;
CREATE TABLE IF NOT EXISTS review(review_id serial primary key,
product_id integer,
rating integer,
recommend integer,
helpfulness integer,
summary varchar(150),
body varchar(2000),
response varchar(2000),
reviewer_name varchar(100),
email varchar(100),
reported boolean,
photos text[5]
);

COPY review(
product_id,
rating,
recommend,
helpfulness,
summary,
body,
response,
reviewer_name,
email,
reported,
photos)
FROM 'C:/Users/timfr/DOCUME~1/github/HACKRE~1/SDC/REVIEW~1/server/DATA-G~1/test1.csv'
DELIMITER ','
CSV HEADER;