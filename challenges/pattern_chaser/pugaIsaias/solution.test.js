const PatternChaser = require("./solution");

test('PatternChaser("da2kr32a2")', () => {
  expect(PatternChaser("da2kr32a2")).toBe("yes a2");
});

test('PatternChaser("sskfssbbb9bbb")', () => {
  expect(PatternChaser("sskfssbbb9bbb")).toBe("yes bbb");
});
