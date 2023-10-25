const diamond = require("./diamond");

test("0 is null", () => {
  expect(diamond(0)).toBe(null);
});

test("-3 is null", () => {
  expect(diamond(-3)).toBe(null);
});

test("5 is   *\n ***\n*****\n ***\n  *\n", () => {
  expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n");
});
