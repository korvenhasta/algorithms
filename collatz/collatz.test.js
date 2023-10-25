const collatz = require("./collatz");

test("20 to equal 8", () => {
  expect(collatz(20)).toBe(8);
});

test("15 to equal 18", () => {
  expect(collatz(15)).toBe(18);
});
