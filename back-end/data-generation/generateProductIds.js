/* 
  Generates a random number of ids for reviews between 1 and the number inputted
    ie 1000 will generate roughly 1000 ints representing productIds between the index of 0 and 1000
    each time it iterates it creates that random index and pushes between 0 and 6 of those product ids to the array
*/

const generateProductIds = (num) => {
  const productIds = [];

  while (productIds.length <= num) {
    //creates a random index between 1 and maximum number//
    const randomIndex = Math.floor(Math.random() * num + 1);
    //creates a random quantitity of reviews to add to that particular index//
    let randomQtyReviews = Math.floor(Math.random() * 100);

    productIds.push(...new Array(randomQtyReviews).fill(randomIndex));
  }
  return productIds;
};

module.exports = generateProductIds;
