//Проверка валидности аргументов
const ifValid = (min, max) => {
  const error = 'Недопустимые аргументы';
  if (min > max || min < 0 || max < 0) {
    throw new RangeError(error);
  }
};

//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInteger = (min, max) => {
  ifValid(min, max);
  const randomize = Math.random() * (max - min + 1);
  return Math.floor(randomize) + min;
};

getRandomInteger(3, 17);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = (min, max, decimalPlaces) => {
  ifValid(min, max);
  min = Number(min.toFixed(decimalPlaces));
  max = Number(max.toFixed(decimalPlaces));
  const randomize = Math.random() * (max - min + 1) + min;
  return Number(randomize.toFixed(decimalPlaces));
};

getRandomFloat(1.16, 4.75, 0);
