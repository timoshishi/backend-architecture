const express = require('express');
const app = express();
const logger = require('morgan')('dev');

const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.static('../client/dist'));
app.use('/reviews', require('./routes/reviews.js'));
app.use('/products', require('./routes/products.js'));
app.use(express.json());

app.listen(PORT, () => {
  console.log('Serving up now at http://localhost:' + PORT);
});
