const { uuid } = require('uuidv4');
const createCharacteristics = (product_id) => {
  const attributes = ['fit', 'length', 'comfort', 'quality', 'width', 'size'];
  let numOfAttributes = Math.floor(Math.random() * attributes.length + 1);

  const characteristics = {
    product_id,
    fit: null,
    length: null,
    comfort: null,
    quality: null,
    width: null,
    size: null,
  };

  while (numOfAttributes > 0) {
    let idx = Math.floor(Math.random() * attributes.length);

    if (!characteristics[attributes[idx]]) {
      characteristics[attributes[idx]] = (Math.random() * 5)
        .toFixed(4)
        .toString();
    }
    numOfAttributes--;
  }

  return characteristics;
};
module.exports = createCharacteristics;
