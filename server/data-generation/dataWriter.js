const ObjectsToCsv = require('objects-to-csv');
const createReview = require('./createReview');
const generateProductIds = require('./generateProductIds');

const ids = generateProductIds(100000);
const reviews = ids.map((id, i) => createReview(id, i));
(async () => {
  const csv = new ObjectsToCsv(reviews);
  try {
    console.time('data');
    await csv.toDisk('./test1.csv');
    await console.log('written');
    console.timeEnd('data');
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
