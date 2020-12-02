const express = require('express');
const router = express.Router();
const reviews = require('../data/dummy-reviews');
const metadata = require('../data/dummy-meta');

router.get('/:product_id/list', async (req, res) => {
  const { product_id } = req.params;
  let { page, count, sort } = req.query;
  count = count || 5;
  page = page || 1;
  sort = sort || 'newest';

  console.log('single review', { product_id, page, count, sort });
  try {
    res.json(reviews.results.slice(0, count));
  } catch (e) {
    console.error(e);
  }
  //try catch ...
  // SELECT * FROM review WHERE product = ${id} AND page = ${page} ORDER BY ${sort} LIMIT = count
  //Model.find({product_id: ${id}}).where({page}).equals(${page}).limit(${count}).sort(${sort})

  //FILTER THROUGH THE RETURNED REVIEWS TO REMOVE ANY MARKED AS REPORTED -- MAY NEED TO PERFORM MORE COMPLEX QUERIES TO REDUCE WORK SERVERSIDE
  //res.json(review);
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
  const {
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = req.body;
  // <=== this might work! otherwise just create an object out of the destructured bosy at 36 //newReview = JSON.stringify(newReview) // INSERT into review(reviews) VALUES (newReview) //const review = {rating, summary...} //review = new Review(review) //await review.save()
  //try catch
  try {
    res.status(201).end();
  } catch (error) {
    console.error(error.message, 'CREATE REVIEW');
    res.end();
  }
  // INSERTING JSON OBJECT INTO JSON AREA POSTGRES
  /* const newReview = ({
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = req.body);
   */
  // res
  //   .status(201)
  //   .send('Created');
  //err res.status(500)
});

//MARK AS HELPFUL
router.put('/helpful/:review_id', async (req, res) => {
  const { review_id } = req.params;
  //try catch
  //UPDATE review SET helpful = helpful + 1 WHERE review_id = review_id //I will need to perform a more complex query in this
  // const product = await Product.findById(req.params.id)
  //review.reviews.forEach(review => if review.review_id === review_id, review.helpful += 1)
  res.status(204).send('Marked helpful');
});

//REPORT
router.put('/report/:review_id', async (req, res) => {
  const { review_id } = req.params;
  console.log(review_id);
  //try catch
  //UPDATE review SET reported = true WHERE review_id = review_id //I will need to perform a more complex query in this

  // const product = await Product.findById(req.params.id)
  //review.reviews.forEach(review => if review.review_id === review_id, review.reported = true)
  //await product.save
  res.status(204).send('NO CONTENT, REPORTED');
});

module.exports = router;
