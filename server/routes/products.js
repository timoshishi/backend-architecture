const express = require('express');
const router = express.Router();

router.get('/products/list', async (req, res) => {
  const { count, page } = req.query;
  count = count || 10;
  page = page || 10;
  //try catch
  // SELECT * FROM product WHERE page = ${page} LIMIT ${count}
  //Product.find({}).where({page}).equals(${page}).limit(${count})

  //res.json(resultObj)
});

module.exports = router;
