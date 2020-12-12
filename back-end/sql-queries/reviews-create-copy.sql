
DROP TABLE review;
CREATE TABLE IF NOT EXISTS review(
	review_id serial primary key,
    product_id integer,
    helpfulness integer,
    summary varchar(150),
    body varchar(2000),
    response varchar(2000),
    reviewer_name varchar(100),
    email varchar(100),
    reported integer,
    photos text[5],
    recommend integer,
    rating integer,
    date timestamptz
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
    photos,
    date)
FROM 'C:/Users/timfr/DOCUME~1/github/HACKRE~1/SDC/REVIEW~1/back-end/DATA-G~1/reviews.csv'
DELIMITER ','
CSV HEADER;
CREATE INDEX idx_product_id ON review(product_id);
CLUSTER review USING idx_product_id;

--\copy review(product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos) FROM 'C:/Users/timfr/DOCUME~1/github/HACKRE~1/SDC/REVIEW~1/server/DATA-G~1/reviews.csv' DELIMITER ',' CSV HEADER;

--COPY review(product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos)  FROM PROGRAM 'cmd /c "type C:/Users/timfr/DOCUME~1/github/HACKRE~1/SDC/REVIEW~1/server/DATA-G~1/test1.csv"' WITH (format TEXT);

--SELECT * FROM review;