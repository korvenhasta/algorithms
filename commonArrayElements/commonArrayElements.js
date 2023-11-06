function common(a, b, c) {
  let dictionary = {};

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (dictionary.hasOwnProperty(element) === false) {
      dictionary[element] = [0, 0, 0];
    }
    dictionary[element][0] = dictionary[element][0] + 1;
  }

  for (let index = 0; index < b.length; index++) {
    const element = b[index];
    if (dictionary.hasOwnProperty(element) === false) {
      continue;
    }
    dictionary[element][1] = dictionary[element][1] + 1;
  }

  for (let index = 0; index < c.length; index++) {
    const element = c[index];
    if (dictionary.hasOwnProperty(element) === false) {
      continue;
    }
    dictionary[element][2] = dictionary[element][2] + 1;
  }

  return Object.keys(dictionary).reduce((accumulator, key) => {
    return Number(key) * Math.min(...dictionary[key]) + Number(accumulator);
  }, 0);
}

module.exports = common;
