# Fizzbuzz

## Description
Have the function `FizzBuzz(num)` take the `num` parameter being passed and return `all the numbers from 1 to num separated by spaces`, but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz", and every number that is divisible by both 3 and 5 with the word "FizzBuzz".

**So for example:**
```
if num is 16
Your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". 
```
The input will be within the range 1 - 50.

## Examples
```
    Input: 3
    Output: 1 2 Fizz
    
    Input: 8
    Output: 1 2 Fizz 4 Buzz Fizz 7 8
```

## Initial code (To test in console by yourself)
```javascript
function FizzBuzz(num)
{ 
 
  // code goes here  
  return num; 
}
   
// keep this function call here 
console.log(FizzBuzz(readline()));
```

## Intial code (For automated test)
````javascript 
function FizzBuzz(num)
{ 

    // code goes here  
    return num; 
}
module.exports = FizzBuzz;
````

>You can find this code inside the `solution.js` file listed here. after placing your logic inside this code, you can run the following command to test your code: 

```console
  > npm -s run fizzbuzz
```
>This command should be run inside the root of the repository folder. 

This will show you something like this:

>FAIL TEST
```console
 FAIL  challanges/fizzbuzz/_test/solution.test.js
  ● FizzBuzz(3)

    expect(received).toBe(expected) // Object.is equality

    Expected: "1 2 Fizz"
    Received: 3

  ● FizzBuzz(8)

    expect(received).toBe(expected) // Object.is equality

    Expected: "1 2 Fizz 4 Buzz Fizz 7 8"
    Received: 3

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        1.329 s
```

>CORRECT TEST
```console
 PASS  challanges/fizzbuzz/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```