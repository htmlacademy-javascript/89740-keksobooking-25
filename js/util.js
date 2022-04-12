const ifValid = (min, max) => {
  const error = 'Недопустимые аргументы';
  if (min > max || min < 0 || max < 0) {
    throw new RangeError(error);
  }
};

const getRandomInteger = (min, max) => {
  ifValid(min, max);
  const randomize = Math.random() * (max - min + 1);
  return Math.floor(randomize) + min;
};

const getRandomFloat = (min, max, decimalPlaces) => {
  ifValid(min, max);
  min = Number(min.toFixed(decimalPlaces));
  max = Number(max.toFixed(decimalPlaces));
  const randomize = Math.random() * (max - min + 1) + min;
  return Number(randomize.toFixed(decimalPlaces));
};

const getRandomArray = (array) => {

  const copyArray = array.slice();
  const newArray = [];

  for (let i = 0; i <= getRandomInteger(0, copyArray.length - 1); i++) {
    newArray[i] = copyArray.splice(getRandomInteger(0, copyArray.length - 1), 1).join();
  }

  return newArray;
};

export {getRandomInteger, getRandomFloat, getRandomArray};
