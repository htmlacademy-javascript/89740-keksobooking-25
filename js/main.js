const error = 'Недопустимые аргументы';

//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInteger(min, max) {

  if (min < max && min > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return error;
}
getRandomInteger(3, 8);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloat(min, max, decimalPlaces) {

  if (min < max && min >= 0) {
    const result = Math.random() * (max - min + 1) + min;
    return result.toFixed(decimalPlaces);
  }
  return error;
}

getRandomFloat(3, 15, 4);
