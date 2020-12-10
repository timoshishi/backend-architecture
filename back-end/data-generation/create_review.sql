--INSERT INTO review(photos)
--VALUES ('{http://placeimg.com/640/480,http://placeimg.com/640/480,http://placeimg.com/640/480,http://placeimg.com/640/480}' )

--DELETE FROM review where review_id >= 0;
DROP TABLE review;
CREATE TABLE IF NOT EXISTS review(review_id serial primary key,
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
CREATE INDEX idx_product_id ON review(product_id);
select * from review;