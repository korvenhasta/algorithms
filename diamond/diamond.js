function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  const middleN = Math.floor(n / 2);
  let diamondSrting = "";
  for (let index = -middleN; index <= middleN; index++) {
    let stars = 2 * (middleN - Math.abs(index)) + 1;
    let spaces = (n - stars) / 2;
    diamondSrting += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }
  return diamondSrting;
}

module.exports = diamond;
