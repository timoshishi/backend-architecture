const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const metadata = require('../data/dummy-meta');
const pool = require('../db');
const { uuid } = require('uuidv4');
/* GET  A LIST OF REVIEWS RELATED TO PRODUCT ID */
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
    }
  } catch (e) {
    console.error(e.message);
    res.json({ error: e.message });
  }
});

/* GET PRODUCT METADATA */
router.get('/:product_id/meta', async (req, res) => {
  const { product_id } = req.params;
  try {
    const ratings = await pool.query(
      'SELECT rating, recommend FROM review WHERE product_id = $1',
      [product_id]
    );
    const characters = await pool.query(
      'SELECT fit, length, comfort, quality, width, size FROM characteristics WHERE product_id = $1',
      [product_id]
    );

    const meta = {
      product_id,
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
    Object.keys(characters.rows[0]).forEach((char, i) => {
      const upper = firstToUppercase(char);
      const charObj = characters.rows[0];
      if (charObj[char]) {
        meta.characteristics[upper] = {
          value: charObj[char].toString(),
          id: i,
        };
      }
    });
    res.json(meta);
  } catch (e) {
    console.error(e.message, 'GET METADATA');
    res.json({ error: e.message });
  }
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
    res.status(204).send('finished');
  } catch (err) {
    res.json({ 'error at helpful': err.message });
  }
});

//REPORT A REVIEW
router.put('/report/:review_id', async (req, res) => {
  const { review_id } = req.params;
  try {
    const row = await pool.query(
      'UPDATE review SET reported = 1  WHERE review_id = $1',
      [review_id]
    );
    res.status(204).send('NO CONTENT, REPORTED');
  } catch (err) {
    res.json({ 'error at helpful': err.message });
  }
});
/* HELPER FUNCTION */
const firstToUppercase = (str) => str[0].toUpperCase() + str.slice(1);

module.exports = router;
