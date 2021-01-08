function FizzBuzz(num) {
  // code goes here
  let result = "";
  for (var each = 1; each <= num; each++) {
    if (each % 3 === 0 && each % 5 === 0) result += " FizzBuzz";
    else if (each % 3 === 0) result += " Fizz";
    else if (each % 5 === 0) result += " Buzz";
    else result += each === 1 ? each : " " + each;
  }
  return result;
}

module.exports = FizzBuzz;
