const generateProductIds = (num) => {
  const reviewNumbers = [];

  console.time('product id gen time');
  for (let i = 0; reviewNumbers.length <= num; i++) {
    let randomQtyReviews = Math.floor(Math.random() * 350);
    reviewNumbers.push(...new Array(randomQtyReviews).fill(i));
  }
  console.timeEnd('product id gen time');

  console.time('product id remove');
  while (reviewNumbers.length > 0) {
    reviewNumbers.pop();
  }
  console.timeEnd('product id remove');
  return reviewNumbers;
};

let tenMil = generateProductIds(10000000);

const createData = (num) => {
  //generate the amount of objects needed using faker in a format that both files can use;
};

const writeData = (num) => {
  let productIds = generateProductIds(num); //writes once
  //let reviewFile = fs.createWriteStream('data.txt')
  //while productIds.length

  //break data generation into batches
  //let currentIds = productIds.splice(-10000)
  //let currentUsers = createData(currentIds)
  //writeStream.write(')
};
