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

>You can find this code inside the `solution.js` file listed here. After placing your logic inside this code, you can run the following command to test your code: 

>This command should be run inside the root of the repository folder. 

```console
  > npm -s run pattern_chaser
```

This will show you something like this:

>FAIL TEST
```console
 FAIL  challanges/pattern_chaser/_test/solution.test.js
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
 PASS  challanges/pattern_chaser/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```