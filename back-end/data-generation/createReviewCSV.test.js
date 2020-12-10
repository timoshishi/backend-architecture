const createReviewCSV = require('./createReviewCSV');

describe('createReview', () => {
  const fakeUser = createReviewCSV(1);
  const fakeUser2 = createReviewCSV(1);

  test('has a product_id of 1', () => {
    expect(fakeUser.product_id).toBe(1);
  });

  test('creates a unique user every time', () => {
    expect(fakeUser).not.toBe(fakeUser2);
  });

  test('has a name of type string', () => {
    expect(typeof fakeUser.reviewer_name).toBe('string');
  });
  // test('has an array of photos with length between 0 and 4', () => {
  //   expect(fakeUser.photos.length).toBeLessThan(4);
  // });
  test('has a rating', () => expect(fakeUser.rating).toBeDefined());
});
