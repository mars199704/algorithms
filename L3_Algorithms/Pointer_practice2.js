function isSubsequence(str1, str2) {
  if (str1.length == 0) return true;
  if (str1.length > str2.length) return false;
  const result = str1.split("");
  let pointer = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == result[pointer]) {
      pointer++;
    }
  }
  return pointer == result.length;
}

console.log(isSubsequence("book", "brooklyn")); // true
console.log(isSubsequence("dog", "qwdwqeoqwegq")); // true
console.log(isSubsequence("book", "koob")); // false
console.log(isSubsequence("abc", "acb")); // false
