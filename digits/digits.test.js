const digits = require("./digits");

test("0 has a number of digits: 1", () => {
  expect(digits(0)).toBe(1);
});

test("9 has a number of digits: 1", () => {
  expect(digits(9)).toBe(1);
});

test("66 has a number of digits: 2", () => {
  expect(digits(66)).toBe(2);
});

test("9876543210 has a number of digits: 10", () => {
  expect(digits(9876543210)).toBe(10);
});
