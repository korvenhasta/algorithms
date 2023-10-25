/**
 * Compresses a number by counting the occurrences of each number.
 *
 * @param {number} number - The number to encode with the "look and say" algorithm.
 * @returns {number} The result of applying the look-and-say sequence to the input.
 */
const lookSay = (number) => {
  let counter = 1;
  let numberString = number.toString();
  let resultString = "";

  if (numberString.length === 1) {
    resultString = counter.toString() + numberString[0];
    return parseInt(resultString);
  }

  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] === numberString[i - 1]) {
      counter++;
    } else {
      resultString = resultString + counter.toString() + numberString[i - 1];
      counter = 1;
    }
    //     console.log("counter: ", counter)
    //     console.log("numberString: ", numberString[i])
  }

  resultString =
    resultString + counter.toString() + numberString[numberString.length - 1];
  return parseInt(resultString);
};
