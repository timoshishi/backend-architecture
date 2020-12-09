const ObjectsToCsv = require('objects-to-csv');
const createReviewCSV = require('./createReviewCSV');
const generateProductIds = require('./generateProductIds');
const createRatings = require('./createRatings');
const productIds = generateProductIds(1000000);

const usedIds = {};

const writeData = async () => {
  console.time('data gen');
  if (productIds.length <= 0) {
    return;
  }

  //creates a current data set to work with
  const currentProductIds = productIds.splice(-100000);

  const reviews = currentProductIds.map((productId) =>
    createReviewCSV(productId)
  );

  const reviewCsv = new ObjectsToCsv(reviews);
  try {
    await reviewCsv.toDisk('./reviews.csv', { append: true });
    await console.log('written');
    writeData();
  } catch (err) {
    console.error(err.message);
  }
  console.timeEnd('data gen');
};
writeData();
