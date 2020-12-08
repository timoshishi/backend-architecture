const ObjectsToCsv = require('objects-to-csv');
const createReviewCSV = require('./createReviewCSV');
const generateProductIds = require('./generateProductIds');

const productIds = generateProductIds(1000000);
const reviewIds = [];
for (let i = productIds.length; i >= 0; i--) {
  reviewIds.push(i);
}
// const reviewIds = productIds.map((item, i) => i);
// console.log('reviewIds.length', reviewIds.length);

const writeData = async () => {
  console.time('data gen');
  if (productIds.length <= 0) {
    return;
  }

  //creates a current data set to work with
  const currentProductIds = productIds.splice(-100000);

  const reviews = currentProductIds.map((productId) => {
    return createReviewCSV(reviewIds.pop(), productId);
  });

  const csv = new ObjectsToCsv(reviews);
  try {
    await csv.toDisk('./test1.csv', { append: true });
    await console.log('written');
    writeData();
  } catch (err) {
    console.error(err.message);
  }
  console.timeEnd('data gen');
};
writeData();
