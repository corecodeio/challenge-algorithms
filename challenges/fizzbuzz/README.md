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

>Test example command:

```console
  > npm -s run test:watch  -- ./challenges/fizzbuzz/_test/solution.test.js
```

This will show you something like this:

>FAIL TEST
```console
 FAIL  challenges/fizzbuzz/_test/solution.test.js
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
 PASS  challenges/fizzbuzz/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```

## Why does this work? (npm -s run test:watch  -- [solution.test.js directory])
We are using an npm package project, inside the configurations of the project, we have a file call [package.json](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies), this file contains a section call [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) where you can place an alias to a set of scripts you want to run, for example, the alias **test:watch** would run: [jest --watch](https://jestjs.io/docs/en/cli#--watch) script command, we also use **--** to pass arguments to that command, in this specific case the **solution.test.js directory**. To [run](https://docs.npmjs.com/cli/v6/commands/npm-run-script) the alias commands in test, we use **npm run**, the [-s](https://docs.npmjs.com/cli/v6/using-npm/config#shorthands-and-other-cli-niceties) argument is to prevent showing unnecessary log level messages.