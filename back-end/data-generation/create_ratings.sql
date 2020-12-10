CREATE TABLE IF NOT EXISTS ratings(
  rating_id INT GENERATED ALWAYS AS IDENTITY,
  product_id integer,
  "1" integer NOT NULL,
  "2" integer NOT NULL,
  "3" integer NOT NULL,
  "4" integer NOT NULL,
  "5" integer NOT NULL,
  PRIMARY KEY(rating_id)
);

SELECT * FROM ratings;