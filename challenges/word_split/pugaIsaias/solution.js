function WordSplit(strArr) {
  // code goes here
  word = strArr[0];
  wordsBank = strArr[1].split(",");

  wordsUsed = (word, wordsBank) => {
    words = [];
    for (var eachWord of wordsBank) {
      wordsBank.forEach((otherWord) => {
        if (word === eachWord + otherWord) {
          words.push(eachWord, otherWord);
        }
      });
    }
    return words;
  };

  words = wordsUsed(word, wordsBank);

  return words.length > 0 ? words.join(",") : "not possible";
}

module.exports = WordSplit;
