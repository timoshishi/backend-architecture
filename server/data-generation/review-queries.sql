--Helpful
--EXPLAIN ANALYZE SELECT * FROM review WHERE product_id = 207768 AND reported != 1 ORDER BY helpfulness ASC LIMIT 5;

--Relevant
--EXPLAIN ANALYZE SELECT * FROM review WHERE product_id = 207768 AND reported != 1 ORDER BY review_id - helpfulness LIMIT 5;
SELECT * FROM review WHERE product_id = 207768 AND reported != 1 ORDER BY review_id - helpfulness LIMIT 5;

--Newest
--EXPLAIN ANALYZE SELECT * FROM review WHERE product_id = 207768 AND reported != 1 ORDER BY review_id LIMIT 5

--Insert new review
--INSERT INTO review (product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos) VALUES(14, 3, 1, 14, 'this is a review', 'john is a certain guu','this is a long review', 'this is a response', 'firstName', 1, array[]::text[]) RETURNING *;


-- Mark review Helpful
--UPDATE review SET helpfulness = helpfulness + 1  WHERE review_id = 7;

--Report review
--UPDATE review SET reported = 1  WHERE review_id = 1;

--SELECT * FROM review WHERE product_id = 805955;