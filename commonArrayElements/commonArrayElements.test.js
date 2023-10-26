const common = require("./commonArrayElements");

test("[1, 2, 3], [5, 3, 2], [7, 3, 2] is 5", () => {
  expect(common([1, 2, 3], [5, 3, 2], [7, 3, 2])).toBe(5);
});

test("[1, 2, 3], [5, 3, 2], [7, 3, 2] is 7", () => {
  expect(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])).toBe(7);
});
