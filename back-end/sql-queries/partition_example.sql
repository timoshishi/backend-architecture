CREATE TABLE if not exists partchars (
  characteristic_id serial PRIMARY KEY,
  name VARCHAR(255),
  value DECIMAL,
  product_id INTEGER
) PARTITION BY RANGE(product_id);

CREATE TABLE if not exists _1stm_prods PARTITION OF review FOR VALUES FROM ('0') TO ('1000000');

CREATE TABLE if not exists _2ndm_prods PARTITION OF review FOR VALUES FROM ('1000000') TO ('2000000');

CREATE TABLE if not exists _3rdm_prods PARTITION OF review FOR VALUES FROM ('2000000') TO ('3000000');

CREATE TABLE if not exists _4thm_prods PARTITION OF review FOR VALUES FROM ('3000000') TO ('4000000');

CREATE TABLE if not exists _5thm_prods PARTITION OF review FOR VALUES FROM ('4000000') TO ('5000000');

CREATE TABLE if not exists _6thm_prods PARTITION OF review FOR VALUES FROM ('5000000') TO ('6000000');

CREATE TABLE if not exists _7thm_prods PARTITION OF review FOR VALUES FROM ('6000000') TO ('7000000');

CREATE TABLE if not exists _8thm_prods PARTITION OF review FOR VALUES FROM ('7000000') TO ('8000000');

CREATE TABLE if not exists _9thm_prods PARTITION OF review FOR VALUES FROM ('8000000') TO ('9000000');

CREATE TABLE if not exists _10thm_prods PARTITION OF review FOR VALUES FROM ('9000000') TO ('11000000');
