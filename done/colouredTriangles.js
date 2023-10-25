const possibilities = {
  R: "R",
  G: "G",
  B: "B",
  RR: "R",
  GG: "G",
  BB: "B",
  RG: "B",
  GR: "B",
  BG: "R",
  GB: "R",
  BR: "G",
  RB: "G",
};

function triangle(row) {
  if (row.length === 1) {
    return row;
  }

  let result = "";
  for (let index = 0; index < row.length - 1; index++) {
    result += possibilities[possibilities[row[index] + row[index + 1]]];
  }
  return triangle(result);
}
