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

>You can find this code inside the `solution.js` file listed here. After placing your logic inside this code, you can run the following command to test your code: 

>This command should be run inside the root of the repository folder. 

```console
  > npm -s run k_unique_characters
```

This will show you something like this:

>FAIL TEST
```console
  FAIL  challanges/k_unique_characters/_test/solution.test.js
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
 PASS  challanges/k_unique_characters/_test/solution.test.js

Test Suites: 1 passed, 1 total
Tests:       2 passed, 1 total
Snapshots:   0 total
Time:        1.494 s
```