function PatternChaser(str) {
  // code goes here
  patternFinder = (str) => {
    patterns = [];

    patternSize = (str, index1, index2) => {
      size = 2;
      while (
        str.substring(index1, index1 + size + 1) ===
        str.substring(index2, index2 + size + 1)
      ) {
        size++;
      }
      return size;
    };

    for (var index1 = 0; index1 < str.length - 2; index1++) {
      for (var index2 = index1 + 1; index2 < str.length - 1; index2++) {
        if (
          str.substring(index1, index1 + 2) ===
          str.substring(index2, index2 + 2)
        ) {
          size = patternSize(str, index1, index2);
          patterns.push(str.substring(index1, index1 + size));
        }
      }
    }

    return patterns;
  };

  longestPattern = patternFinder(str).sort((a, b) => {
    return b.length - a.length;
  })[0];

  return patterns.length > 0 ? "yes " + longestPattern : "no null";
}

module.exports = PatternChaser;
