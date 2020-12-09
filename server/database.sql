CREATE DATABASE IF NOT EXISTS reviews

DROP TABLE review;
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
reported integer,
photos text[5]
);

DROP table characteristics;

CREATE TABLE IF NOT EXISTS characteristics(
  id serial primary key,
  name varchar(100),
  CONSTRAINT fk_product_key
  FOREIGN KEY(product_id)
  REFERENCES review(product_id)
);

DROP TABLE characteristics_review;

CREATE TABLE characteristics_review(
  id serial primary key,
  character_id serial
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE IF NOT EXISTS ratings(
  rating_id serial primary key,
  "1" integer NOT NULL,
  "2" integer NOT NULL,
  "3" integer NOT NULL,
  "4" integer NOT NULL,
  "5" integer NOT NULL
  CONSTRAINT fk_product_id
    FOREIGN KEY(product_id)
      REFERENCES(product_id)
)

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

CREATE INDEX idx_product_id ON review(product_id);

SELECT * FROM review;
