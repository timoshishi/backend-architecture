const ObjectsToCsv = require('objects-to-csv');
const createReviewCSV = require('./createReviewCSV');
const generateProductIds = require('./generateProductIds');
const createCharacteristics = require('./createCharacteristics');
console.log('started');

const qty = 1000000;
const productIds = generateProductIds(qty);

const productCharacteristicIds = [...new Set(productIds)];

const writeData = async () => {
  console.log('started');
  if (productIds.length <= 0) {
    return;
  }
  console.log('productCharacteristicIds', productCharacteristicIds.length);
  //creates a current data set to work with
  const currentProductIds = productIds.splice(-100000);
  const currentIds = productCharacteristicIds.splice(-100000);

  const reviews = currentProductIds.map((productId) =>
    createReviewCSV(productId)
  );
  const characteristics = currentIds.map((productId) =>
    createCharacteristics(productId)
  );

  const reviewCsv = new ObjectsToCsv(reviews);
  const charsCsv = characteristics.length && new ObjectsToCsv(characteristics);

  console.time('data gen');
  try {
    await reviewCsv.toDisk('./reviews.csv', { append: true });
    await console.log('written');
    if (characteristics.length) {
      await charsCsv.toDisk('./characteristics.csv', { append: true });
      await console.log('chars written');
    }

    writeData();
  } catch (err) {
    console.error(err.message);
  }
  await console.timeEnd('data gen');
};
writeData();

//write data function
// create an array of characteristics objects for each productId
//write to disk
// const productCharacteristicIds = [...new Set(productIds)];

// const writeCharacteristics = async () => {
//   if (productCharacteristicIds.length <= 0) {
//     return;
//   }
//   //creates a current data set to work with
//   const currentIds = productCharacteristicIds.splice(-100000);

//   const characteristics = currentIds.map((productId) =>
//     createCharacteristics(productId)
//   );

//   const charsCsv = new ObjectsToCsv(characteristics);
//   try {
//     await charsCsv.toDisk('./characteristics.csv', { append: true });
//     await console.log('chars written');
//     writeCharacteristics();
//   } catch (err) {
//     console.error(err.message);
//   }
// };
// writeCharacteristics();
