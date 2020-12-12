require('dotenv').config();
require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const PORT = 3333;
app.use(morgan('dev'));
app.use(require('cors')());
app.use(express.static('../client/dist'));

app.use(express.json());

app.listen(PORT, () => {
  console.log('Serving up now at ' + JSON.stringify(PORT));
});
