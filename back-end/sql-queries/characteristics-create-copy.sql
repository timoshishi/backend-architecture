--DROP TABLE characteristics;

CREATE TABLE IF NOT EXISTS characteristics(
characteristic_id serial primary key,
product_id integer,
	fit real,
	length real,
	comfort real,
	quality real,
	width real,
	size real
);
CREATE INDEX idx_prod_id ON characteristics(product_id);

COPY characteristics(
product_id,
fit,
length,
comfort,
quality,
width,
size)
FROM 'C:/Users/timfr/DOCUME~1/github/HACKRE~1/SDC/REVIEW~1/back-end/DATA-G~1/characteristics.csv'
DELIMITER ','
CSV HEADER;

SELECT * FROM characteristics;