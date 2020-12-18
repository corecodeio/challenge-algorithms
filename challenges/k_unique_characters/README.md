# K unique characters

## Description
Have the function `KUniqueCharacters(str)` take the `str` parameter being passed and `find the longest substring that contains k unique characters`, where `k` will be the first character from the string. 
The substring will start from the second position in the string because the first character will be the integer k. 

**So for example:**
```
if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, 
namely: ["aabba", "ac", "cb", "ba"] 
```
Your program should return `"aabba"` because it is the longest substring.

If there are multiple longest substrings, then return the first substring encountered with the longest length. `k will range from 1 to 6`.

## Examples
```
    Input: "3aabacbebebe"
    Output: cbebebe
    
    Input: "2aabbcbbbadef"
    Output: bbcbbb
```

## Initial code (To test in console by yourself)
```javascript
function KUniqueCharacters(str) 
{ 
 
  // code goes here  
  return str;
}
   
// keep this function call here 
console.log(KUniqueCharacters(readline()));
```

## Intial code (For automated test)
````javascript 
function KUniqueCharacters(str) 
{ 

    // code goes here  
    return str;
}
module.exports = KUniqueCharacters;
````

>Test example command:

```console
  > npm -s run test:watch  -- ./challenges/k_unique_characters/_test/solution.test.js
```

This will show you something like this:

>FAIL TEST
```console
  FAIL  challenges/k_unique_characters/_test/solution.test.js
  ● KUniqueCharacters("3aabacbebebe")

    expect(received).toBe(expected) // Object.is equality

    Expected: "cbebebe"
    Received: "3aabacbebebe"

  ● KUniqueCharacters("2aabbcbbbadef")

    expect(received).toBe(expected) // Object.is equality

    Expected: "bbcbbb"
    Received: "2aabbcbbbadef"

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        1.323 s
```

>CORRECT TEST
```console
 PASS  challenges/k_unique_characters/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```

## Why does this work? (npm -s run test:watch  -- [solution.test.js directory])
We are using an npm package project, inside the configurations of the project, we have a file call [package.json](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies), this file contains a section call [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) where you can place an alias to a set of scripts you want to run, for example, the alias **test:watch** would run: [jest --watch](https://jestjs.io/docs/en/cli#--watch) script command, we also use **--** to pass arguments to that command, in this specific case the **solution.test.js directory**. To [run](https://docs.npmjs.com/cli/v6/commands/npm-run-script) the alias commands in test, we use **npm run**, the [-s](https://docs.npmjs.com/cli/v6/using-npm/config#shorthands-and-other-cli-niceties) argument is to prevent showing unnecessary log level messages.