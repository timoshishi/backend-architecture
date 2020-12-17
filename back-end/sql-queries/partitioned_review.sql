
DROP TABLE review;

CREATE TABLE IF NOT EXISTS review(
	review_id serial,
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
) PARTITION BY RANGE(product_id);

CREATE TABLE if not exists _1m_prods PARTITION OF review FOR VALUES FROM ('0') TO ('1000000');
CREATE TABLE if not exists _2m_prods PARTITION OF review FOR VALUES FROM ('1000000') TO ('2000000');
CREATE TABLE if not exists _3m_prods PARTITION OF review FOR VALUES FROM ('2000000') TO ('3000000');
CREATE TABLE if not exists _4m_prods PARTITION OF review FOR VALUES FROM ('3000000') TO ('4000000');
CREATE TABLE if not exists _5m_prods PARTITION OF review FOR VALUES FROM ('4000000') TO ('5000000');
CREATE TABLE if not exists _6m_prods PARTITION OF review FOR VALUES FROM ('5000000') TO ('6000000');
CREATE TABLE if not exists _7m_prods PARTITION OF review FOR VALUES FROM ('6000000') TO ('7000000');
CREATE TABLE if not exists _8m_prods PARTITION OF review FOR VALUES FROM ('7000000') TO ('8000000');
CREATE TABLE if not exists _9m_prods PARTITION OF review FOR VALUES FROM ('8000000') TO ('9000000');
CREATE TABLE if not exists _10m_prods PARTITION OF review FOR VALUES FROM ('9000000') TO ('11000000');


CREATE INDEX idx_product_id_1 ON _1m_prods(product_id);
CREATE INDEX idx_product_id_2 ON _2m_prods(product_id);
CREATE INDEX idx_product_id_3 ON _3m_prods(product_id);
CREATE INDEX idx_product_id_4 ON _4m_prods(product_id);
CREATE INDEX idx_product_id_5 ON _5m_prods(product_id);
CREATE INDEX idx_product_id_6 ON _6m_prods(product_id);
CREATE INDEX idx_product_id_7 ON _7m_prods(product_id);
CREATE INDEX idx_product_id_8 ON _8m_prods(product_id);
CREATE INDEX idx_product_id_9 ON _9m_prods(product_id);
CREATE INDEX idx_product_id_10 ON _10m_prods(product_id);
CREATE INDEX idx_product_id_11 ON _11m_prods(product_id);


--CREATE INDEX review_idx ON review(review_id);

CREATE INDEX idx_reported_1 ON _1m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_2 ON _2m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_3 ON _3m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_4 ON _4m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_5 ON _5m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_6 ON _6m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_7 ON _7m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_8 ON _8m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_9 ON _9m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_10 ON _10m_prods(reported) WHERE reported != 1;
CREATE INDEX idx_reported_11 ON _11m_prods(reported) WHERE reported != 1;


CREATE INDEX idx_review_id_1 ON _1m_prods(review_id);
CREATE INDEX idx_review_id_2 ON _2m_prods(review_id);
CREATE INDEX idx_review_id_3 ON _3m_prods(review_id);
CREATE INDEX idx_review_id_4 ON _4m_prods(review_id);
CREATE INDEX idx_review_id_5 ON _5m_prods(review_id);
CREATE INDEX idx_review_id_6 ON _6m_prods(review_id);
CREATE INDEX idx_review_id_7 ON _7m_prods(review_id);
CREATE INDEX idx_review_id_8 ON _8m_prods(review_id);
CREATE INDEX idx_review_id_9 ON _9m_prods(review_id);
CREATE INDEX idx_review_id_10 ON _10m_prods(review_id);
CREATE INDEX idx_review_id_11 ON _11m_prods(review_id);

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

--CLUSTER review USING idx_product_id;

--\copy review(product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos, date) FROM '/home/ubuntu/data/reviews.csv' DELIMITER ',' CSV HEADER;


--SELECT * FROM review;
--CLUSTER review USING idx_product_id;
CLUSTER _1m_prods USING idx_product_id_1;
CLUSTER _2m_prods USING idx_product_id_2;
CLUSTER _3m_prods USING idx_product_id_3;
CLUSTER _4m_prods USING idx_product_id_4;
CLUSTER _5m_prods USING idx_product_id_5;
CLUSTER _6m_prods USING idx_product_id_6;
CLUSTER _7m_prods USING idx_product_id_7;
CLUSTER _8m_prods USING idx_product_id_8;
CLUSTER _9m_prods USING idx_product_id_9;
CLUSTER _10m_prods USING idx_product_id_10;