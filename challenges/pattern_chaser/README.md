# Pattern chaser

## Description
Have the function `PatternChaser(str)` take `str` which will be a string and `return the longest pattern within the string`. A pattern for this challenge will be defined as: if at least 2 or more adjacent characters within the string repeat at least twice. 

**So for example:**
```
"aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. 
```
Your program should return `yes/no pattern/null`.

So if `str` were "aabejiabkfabed" the output should be yes abe. If str were "123224" the output should return no null. The string may either contain all characters (a through z only), integers, or both. But the parameter will always be a string type. `The maximum length for the string being passed in will be 20 characters`. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". `You must always return the longest pattern possible`.

## Examples
```
    Input: "da2kr32a2"
    Output: yes a2
    
    Input: "sskfssbbb9bbb"
    Output: yes bbb
```

## Initial code (To test in console by yourself)
```javascript
function PatternChaser(str) 
{ 
 
  // code goes here  
  return str;
}
   
// keep this function call here 
console.log(PatternChaser(readline()));
```

## Intial code (For automated test)
````javascript 
function PatternChaser(str) 
{ 

    // code goes here  
    return str;
}
module.exports = PatternChaser;
````

>Test example command:

```console
  > npm -s run test:watch  -- ./challenges/pattern_chaser/_test/solution.test.js
```

This will show you something like this:

>FAIL TEST
```console
 FAIL  challenges/pattern_chaser/_test/solution.test.js
  ● PatternChaser("da2kr32a2")

    expect(received).toBe(expected) // Object.is equality

    Expected: "yes a2"
    Received: "da2kr32a2"

  ● PatternChaser("sskfssbbb9bbb")

    expect(received).toBe(expected) // Object.is equality

    Expected: "yes bbb"
    Received: "sskfssbbb9bbb"

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        1.354 s
```

>CORRECT TEST
```console
 PASS  challenges/pattern_chaser/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```

## Why does this work? (npm -s run test:watch  -- [solution.test.js directory])
We are using an npm package project, inside the configurations of the project, we have a file call [package.json](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies), this file contains a section call [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) where you can place an alias to a set of scripts you want to run, for example, the alias **test:watch** would run: [jest --watch](https://jestjs.io/docs/en/cli#--watch) script command, we also use **--** to pass arguments to that command, in this specific case the **solution.test.js directory**. To [run](https://docs.npmjs.com/cli/v6/commands/npm-run-script) the alias commands in test, we use **npm run**, the [-s](https://docs.npmjs.com/cli/v6/using-npm/config#shorthands-and-other-cli-niceties) argument is to prevent showing unnecessary log level messages.