function KUniqueCharacters(str) {
  // code goes here
  k = Number(str[0]);
  str = str.substring(1);

  isValidSubstring = (substr, k) => {
    let uniqueChars = Array.from(new Set(substr));
    return uniqueChars.length <= k ? true : false;
  };

  substringsList = (str, k) => {
    //TODO
    let arr = [];
    for (var ini = 0; ini < str.length; ini++)
      for (var end = ini + k; end <= str.length; end++) {
        if (isValidSubstring(str.substring(ini, end), k)) {
          arr.push(str.substring(ini, end));
        }
      }

    return arr;
  };

  let substringKArray = substringsList(str, k);

  let longestSubstring = substringKArray.sort((a, b) => {
    return b.length - a.length;
  })[0];

  return longestSubstring;
}

module.exports = KUniqueCharacters;
