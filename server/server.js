const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
