/* 
  Generates a random number of ids for reviews between 1 and the number inputted
    ie 1000 will generate roughly 1000 ints representing productIds between the index of 0 and 1000
    each time it iterates it creates that random index and pushes between 0 and 6 of those product ids to the array
*/

const generateProductIds = (num) => {
  const productIds = [];

  for (let i = 0; productIds.length <= num; i++) {
    //creates a random index between 1 and maximum number//
    const randomIndex = Math.floor(Math.random() * num + 1);
    //creates a random quantitity of reviews to add to that particular index//
    let randomQtyReviews = Math.floor(Math.random() * 7);

    productIds.push(...new Array(randomQtyReviews).fill(randomIndex));
  }
  return productIds;
};

module.exports = generateProductIds;

// let tenMil = generateProductIds(10000000);

// const createData = (num) => {
//   //generate the amount of objects needed using faker in a format that both files can use;
// };

// const writeData = (num) => {
//   let productIds = generateProductIds(num); //writes once
//   //let reviewFile = fs.createWriteStream('data.txt')
//   //while productIds.length

//   //break data generation into batches
//   //let currentIds = productIds.splice(-10000)
//   //let currentUsers = createData(currentIds)
//   //writeStream.write(')
// };
