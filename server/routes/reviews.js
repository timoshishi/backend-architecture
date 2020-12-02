const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
  console.log('in express router');
  res.send('here');
});

module.exports = router;
