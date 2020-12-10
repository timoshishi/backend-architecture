const generateProductIds = require('./generateProductIds');

describe('generateProductIds.js', () => {
  const idArray = generateProductIds(5);
  test('should return an array with a length of at least 5 and less than 12', () => {
    expect(idArray.length).toBeLessThan(12);
  });

  test('it should not contain integers greater than the number inputted', () => {
    idArray.forEach((id) => expect(id).toBeLessThan(6));
  });
});
