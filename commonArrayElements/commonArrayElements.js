function common(a, b, c) {
  let arrayOfCommonElements = [];
  for (let i in a) {
    if ((b.indexOf(a[i]) && c.indexOf(a[i])) > -1) {
      arrayOfCommonElements.push(a[i]);
    }
  }
  return arrayOfCommonElements.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

module.exports = common;
