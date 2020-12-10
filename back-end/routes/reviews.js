const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const metadata = require('../data/dummy-meta');
const pool = require('../db');

router.get('/:product_id/list', async (req, res) => {
  let { product_id } = req.params;
  let { page, count, sort } = req.query;
  count = count || 5;
  page = page || 0;
  sort = sort || 'relevant';
  product_id = Number(product_id);
  if (page != 1) {
  }
  try {
    if (sort === 'relevant') {
      const results = await pool.query(
        'SELECT review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos FROM review WHERE product_id = $1 AND reported != 1 ORDER BY review_id - helpfulness ASC LIMIT $2',
        [product_id, count]
      );
      resultTransformed = results.rows.map((result) => ({
        ...result,
        photos: result.photos.map((photo) => ({
          url: photo,
          thumbnail_url: photo,
        })),
      }));

      const returnObj = {
        product: product_id,
        page: page,
        count: count,
        results: resultTransformed,
      };
      await res.json(returnObj);
    } else {
      if (sort === 'newest') {
        const results = await pool.query(
          'SELECT review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos FROM review WHERE product_id = $1 AND reported != 1 ORDER BY review_id ASC LIMIT $2',
          [product_id, count]
        );
        resultTransformed = results.rows.map((result) => ({
          ...result,
          photos: result.photos.map((photo) => ({
            url: photo,
            thumbnail_url: photo,
          })),
        }));

        const returnObj = {
          product: product_id,
          page: page,
          count: count,
          results: resultTransformed,
        };
        await res.json(returnObj);
      }
      if (sort === 'helpfulness') {
        const results = await pool.query(
          'SELECT review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos FROM review WHERE product_id = $1 AND reported != 1 ORDER BY helpfulness + 0 DESC LIMIT $2',
          [product_id, count]
        );
        resultTransformed = results.rows.map((result) => ({
          ...result,
          photos: result.photos.map((photo) => ({
            url: photo,
            thumbnail_url: photo,
          })),
        }));

        const returnObj = {
          product: product_id,
          page: page,
          count: count,
          results: resultTransformed,
        };
        await res.json(returnObj);
      }
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
  try {
    const ratings = await pool.query(
      'SELECT rating, recommend FROM review WHERE product_id = $1',
      [product_id]
    );
    const meta = {
      ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      recommended: {
        0: 0,
        1: 0,
      },
      characteristics: {},
    };
    ratings.rows.forEach((item) => {
      meta.ratings[item.rating]++;
      meta.recommended[item.recommend]++;
    });

    res.json(meta);
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
  const {
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    date,
  } = req.body;

  const text =
    'INSERT INTO review (product_id, rating, recommend, helpfulness, summary, body, response, reviewer_name, email, reported, photos, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
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
    date,
  ];
  try {
    let response = await pool.query(text, values);
    res.status(201).json({ response });
  } catch (error) {
    console.error(error.message, 'CREATE REVIEW');
    res.status(500).end();
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
