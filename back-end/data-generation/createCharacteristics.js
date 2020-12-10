const createCharacteristics = () => {
  const attributes = ['Fit', 'Length', 'Comfort', 'Quality', 'Width', 'Size'];
  let numOfAttributes = Math.floor(Math.random() * attributes.length + 1);

  const characteristics = {
    product_id,
    Fit: null,
    Length: null,
    Comfort: null,
    Quality: null,
    Width: null,
    Size: null,
  };

  while (numOfAttributes > 0) {
    let idx = Math.floor(Math.random() * attributes.length);

    if (!characteristics[attributes[idx]]) {
      characteristics[attributes[idx]] = (Math.random() * 5)
        .toFixed(4)
        .toString();
    }
  }

  return characteristics;
};
console.log(createCharacteristics(5));
module.exports = createCharacteristics;
