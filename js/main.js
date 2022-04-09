const TITLES = [
  'Маленькая квартирка рядом с парком',
  'Чёткая хата',
  'Небольшая лавочка в парке',
  'Уютное гнездышко для молодоженов',
  'Тихая квартирка недалеко от метро',
  'Квартира-студия в престижном районе'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

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

const getFeatures = (features) => {
  const length = getRandomInteger(1, features.length);
  const newArray = [];

  while (newArray.length < length) {
    const i = getRandomInteger(0, features.length - 1);
    const y = features[i];

    if (!newArray.includes(y)) {
      newArray.push(y);
    }
  }
  return newArray;
};

const createAd = (index) => {
  index = index + 1 < 10 ? `0${index + 1}` : index + 1;

  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: `img/avatars/user${index}.png`,
    },
    offer: {
      title: TITLES[getRandomInteger(0, TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(1, 10000000),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 20),
      checkin: TIMES[getRandomInteger(0, TIMES.length - 1)],
      checkout: TIMES[getRandomInteger(0, TIMES.length - 1)],
      features: getFeatures(FEATURES),
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      photos: PHOTOS[getRandomInteger(0, PHOTOS.length - 1)],
      location,
    },
  };
};

const ads = Array.from({ length: 10 }, (_, index) => createAd(index));
// eslint-disable-next-line no-console
console.log(ads);
