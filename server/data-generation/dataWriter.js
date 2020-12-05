const ObjectsToCsv = require('objects-to-csv');
const createReview = require('./createReview');
const generateProductIds = require('./generateProductIds');

const ids = generateProductIds(1);
const reviews = ids.map((id, i) => createReview(id, i));

(async () => {
  const csv = new ObjectsToCsv(reviews);
  try {
    await csv.toDisk('./test.csv');
    await console.log('written');
  } catch (err) {
    console.error(err.message);
  }
})();

// const fs = require('fs');

// const writerStream = fs
//   .createWriteStream(`reviews.txt`, { flags: 'a' })
//   .on('finish', () => console.log('writing finished'))
//   .on('error', (err) => console.log(err.stack));

// writerStream.write('new output data', () =>
//   console.log('data has been written')
// );

// writerStream.end();
