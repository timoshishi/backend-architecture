const ObjectsToCsv = require('objects-to-csv');
const createReview = require('./createReview');
const generateProductIds = require('./generateProductIds');

console.timeStamp();
const productIds = generateProductIds(1000000);
const reviewIds = productIds.map((item, i) => i);
// console.log('reviewIds.length', reviewIds.length);

const writeData = async () => {
  if (productIds.length <= 0) {
    return;
  }

  //creates a current data set to work with
  const currentProductIds = productIds.splice(-50000);

  const reviews = currentProductIds.map((productId) => {
    return createReview(reviewIds.pop(), productId);
  });

  const csv = new ObjectsToCsv(reviews);
  try {
    // console.time('data');
    await csv.toDisk('./test1.csv', { append: true });
    await console.log('written');
    // console.timeEnd('data');
    writeData();
  } catch (err) {
    console.error(err.message);
  }
};
console.time('reviews');
writeData();
console.timeEnd('reviews');
// const fs = require('fs');
console.timeStamp();
// const writerStream = fs
//   .createWriteStream(`reviews.txt`, { flags: 'a' })
//   .on('finish', () => console.log('writing finished'))
//   .on('error', (err) => console.log(err.stack));

// writerStream.write('new output data', () =>
//   console.log('data has been written')
// );
