/**
 * Finds the number in an array with the most digits.
 *
 * @param {number[]} integers - The integer array to analyze.
 * @returns {number} The number with the most digits.
 */
const possibilities = (signals) => {
  const morseCode = {
    ".": "E",
    "..": "I",
    ".-": "A",
    "...": "S",
    "..-": "U",
    ".-.": "R",
    ".--": "W",
    "-": "T",
    "-.": "N",
    "--": "M",
    "-..": "D",
    "-.-": "K",
    "--.": "G",
    "---": "O",
  };

  if (!signals.includes("?")) {
    return [morseCode[signals]];
  }

  let codes = Object.keys(morseCode);
  //   console.log("codes: ", codes)

  let possibilitiesArray = [];

  for (let i = 0; i < codes.length; i++) {
    const currentCode = codes[i];
    if (currentCode.length === signals.length) {
      //       console.log("currentCode: ", currentCode)
      possibilitiesArray.push(currentCode);
    }
  }
  //   console.log("possibilitiesArray: ", possibilitiesArray)
  let matchingPossibilities = [];
  for (let i = 0; i < signals.length; i++) {
    const signal = signals[i];
    //     console.log("signal: ", signal)
    if (signal !== "?") {
      for (let j = 0; j < possibilitiesArray.length; j++) {
        if (possibilitiesArray[j].charAt(i) === signal) {
          //           console.log(possibilitiesArray[j])
          matchingPossibilities.push(possibilitiesArray[j]);
        }
      }
    } else {
      for (let j = 0; j < possibilitiesArray.length; j++) {
        matchingPossibilities.push(possibilitiesArray[j]);
      }
    }
    //     console.log("matchingPossibilities: ", matchingPossibilities)
    possibilitiesArray = matchingPossibilities;
    matchingPossibilities = [];
  }

  const result = [];
  for (let i = 0; i < possibilitiesArray.length; i++) {
    const matchingCode = possibilitiesArray[i];
    result.push(morseCode[matchingCode]);
  }

  //   console.log("result: ", result)

  return result;
};
