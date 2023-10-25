// function collatz(n) {
//   let result = 0;
//   if (n === 1) {
//     return (result += 1);
//   }
//   let nextNumber = 0;
//   if (n % 2 === 0) {
//     nextNumber = n / 2;
//   } else {
//     nextNumber = n * 3 + 1;
//   }
//   result += 1;
//   return result + collatz(nextNumber);
// }

// module.exports = collatz;

function collatz(n) {
  let result = 0;
  if (n === 1) {
    return (result += 1);
  }
  let nextNumber = 0;
  if (n % 2 === 0) {
    nextNumber = n / 2;
  } else {
    nextNumber = n * 3 + 1;
  }
  result += 1;
  return result + collatz(nextNumber);
}

module.exports = collatz;
