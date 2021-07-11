function uniqueSubstring(str) {
  let start = 0,
    end = 0,
    counter = {},
    maxLength = 0;
  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }
  if (maxLength == 0) {
    console.log("Cannot find ");
    return null;
  }
  return maxLength;
}

console.log(uniqueSubstring("sljfdmweopqjwiodwe"));
console.log(uniqueSubstring("ththtertfth"));
console.log(uniqueSubstring("ttttttttt"));
