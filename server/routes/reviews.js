const express = require('express');
const router = express.Router();
const metadata = require('../data/dummy-meta');
const pool = require('../db');

router.get('/:product_id/list', async (req, res) => {
  let { product_id } = req.params;
  let { page, count, sort } = req.query;
  count = count || 5;
  page = page || 1;
  sort = sort || 'relevant';
  product_id = Number(product_id);
  if (page != 1) {
  }
  try {
    if (sort === 'relevant') {
      const results = await pool.query(
        'SELECT * FROM review WHERE product_id = $1 AND reported != 1 ORDER BY review_id - helpfulness ASC LIMIT $2',
        [product_id, count]
      );
      console.log('res rows', results.rows);
      await res.send(results.rows);
    } else {
      if (sort === 'newest') {
        sort = 'review_id';
      }
      if (sort === 'helpfulness') {
        sort = 'helpfulness';
      }
      console.log({ sort });
      const results = await pool.query(
        'SELECT * FROM review WHERE product_id = $1 AND reported != 1 ORDER BY $2 LIMIT $3',
        [product_id, sort, count]
      );
      res.send(results.rows);
    }
  } catch (e) {
    console.error(e);
    res.status(500);
  }
  //try catch ...
  //Model.find({product_id: ${id}}).where({page}).equals(${page}).limit(${count}).sort(${sort})
});

router.get('/:product_id/meta', async (req, res) => {
  const { product_id } = req.params;
  console.log('metadata', { product_id });
  try {
    res.json(metadata);
  } catch (e) {
    console.error(e.message, 'GET METADATA');
  }
  //try catch
  //SELECT * FROM metadata WHERE product_id = product_id
  //Model.find({product_id: id})
  //res.json(metadata)
});

/* CREATE A NEW REVIEW */
router.post('/:product_id', async (req, res) => {
  const { product_id } = req.params;
  const { rating, summary, body, recommend, name, email, photos } = req.body;
  console.log({ rating });

  const text =
    'INSERT INTO review (product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';
  const values = [
    product_id,
    rating,
    recommend,
    0,
    summary,
    body,
    null,
    name,
    email,
    0,
    photos,
  ];
  try {
    let response = await pool.query(text, values);
    res.status(201).json({ response });
  } catch (error) {
    console.error(error.message, 'CREATE REVIEW');
    res.end();
  }
  //newReview = JSON.stringify(newReview) // INSERT into review(reviews) VALUES (newReview) //const review = {rating, summary...} //review = new Review(review) //await review.save()
});

//MARK AS HELPFUL
router.put('/helpful/:review_id', async (req, res) => {
  const { review_id } = req.params;
  const val = 'helpfulness + 1';
  try {
    const row = await pool.query(
      'UPDATE review SET helpfulness = helpfulness + 1  WHERE review_id = $1',
      [review_id]
    );
    res.send('finished');
  } catch (err) {
    res.json({ 'error at helpful': err.message });
  }
  //try catch
  // const product = await Product.findById(req.params.id)
  //review.reviews.forEach(review => if review.review_id === review_id, review.helpful += 1)
  res.status(204).send('Marked helpful');
});

//REPORT
router.put('/report/:review_id', async (req, res) => {
  const { review_id } = req.params;
  // const val = 'helpfulness + 1';
  try {
    const row = await pool.query(
      'UPDATE review SET reported = 1  WHERE review_id = $1',
      [review_id]
    );
    res.status(204).send('NO CONTENT, REPORTED');
  } catch (err) {
    res.json({ 'error at helpful': err.message });
  }
  //try catch
  // const product = await Product.findById(req.params.id)
  //review.reviews.forEach(review => if review.review_id === review_id, review.reported = true)
  //await product.save
});

module.exports = router;
