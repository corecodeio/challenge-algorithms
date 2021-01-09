const FizzBuzz = require("../solution");

test("FizzBuzz(3)", () => {
  expect(FizzBuzz(3)).toBe("1 2 Fizz");
});

test("FizzBuzz(8)", () => {
  expect(FizzBuzz(8)).toBe("1 2 Fizz 4 Buzz Fizz 7 8");
});
