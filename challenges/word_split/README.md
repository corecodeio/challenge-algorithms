# Word split

## Description
Have the function `WordSplit(strArr)` read the array of strings stored in `strArr`, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. Your goal is to `determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided in the second input`.

**So for example:**
```
strArr can be: ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]. 
The first element can be split into two words: hello and cat because both of those words are in the dictionary.
```
Your program should return `the two words that exist in the dictionary separated by a comma`. So for the example above, your program should return hello,cat. 

There will only be one correct way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. 
The first element itself will never exist in the dictionary as a real word.

## Examples
```
    Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
    Output: base,ball
    
    Input: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
    Output: abcg,efd
```

## Initial code (To test in console by yourself)
```javascript
function WordSplit(strArr)
{ 
 
  // code goes here  
  return strArr;
}
   
// keep this function call here 
console.log(WordSplit(readline()));
```

## Intial code (For automated test)
````javascript 
function WordSplit(strArr)
{ 

    // code goes here  
    return strArr;
}
module.exports = WordSplit;
````

>Test example command:

```console
  > npm -s run test:watch  -- ./challenges/word_split/_test/solution.test.js
```

This will show you something like this:

>FAIL TEST
```console
 FAIL  challenges/word_split/_test/solution.test.js
  ● WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])

    expect(received).toBe(expected) // Object.is equality

    Expected: "base,ball"
    Received: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]

  ● WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])

    expect(received).toBe(expected) // Object.is equality

    Expected: "abcg,efd"
    Received: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        1.362 s
```

>CORRECT TEST
```console
 PASS  challenges/word_split/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```

## Why does this work? (npm -s run test:watch  -- [solution.test.js directory])
We are using an npm package project, inside the configurations of the project, we have a file call [package.json](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies), this file contains a section call [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) where you can place an alias to a set of scripts you want to run, for example, the alias **test:watch** would run: [jest --watch](https://jestjs.io/docs/en/cli#--watch) script command, we also use **--** to pass arguments to that command, in this specific case the **solution.test.js directory**. To [run](https://docs.npmjs.com/cli/v6/commands/npm-run-script) the alias commands in test, we use **npm run**, the [-s](https://docs.npmjs.com/cli/v6/using-npm/config#shorthands-and-other-cli-niceties) argument is to prevent showing unnecessary log level messages.