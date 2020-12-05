const faker = require('faker');

const createFakeUrlArray = () => {
  const randomQty = Math.floor(Math.random() * 5);
  return [...new Array(randomQty)].map((item) => faker.image.imageUrl());
};

const createReview = (product_id, review_id) => ({
  review_id,
  product_id,
  rating: Math.floor(Math.random() * 6),
  recommend: Math.floor(Math.random() * 2999),
  helpfulness: Math.floor(Math.random() * 200),
  summary: faker.lorem.sentence(),
  body: faker.lorem.sentences(Math.floor(Math.random() * 5) + 3),
  response: Math.random() > 0.95 ? faker.lorem.sentences() : null,
  reviewer_name: faker.name.findName(),
  email: faker.internet.email(),
  reported: Math.random() > 0.99,
  photos: createFakeUrlArray(),
});
const fakeReview = createReview(1, 5);
console.log(fakeReview);
module.exports = createReview;
