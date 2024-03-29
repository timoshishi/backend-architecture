
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

--\copy review(product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos, date) FROM '/home/ubuntu/data/reviews.csv' DELIMITER ',' CSV HEADER;

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
CREATE INDEX idx_reported ON review(reported) WHERE reported != 1;
CLUSTER review USING idx_product_id;

--\copy review(product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos, date) FROM '/home/ubuntu/data/reviews.csv' DELIMITER ',' CSV HEADER;


--SELECT * FROM review;