const createReview = require('../../utils/createReview');

exports.seed = async function (knex, Promise) {
  const fakeReview = createReview(1, 5);
  // Deletes ALL existing entries
  return knex('review')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([fakeReview]);
    })
    .catch((err) => {
      console.error(err, 'at knex seed createReviews');
    });
};
