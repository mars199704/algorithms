function sameLetter(str1, str2) {
  let arr1 = str1.split(""),
    arr2 = str2.split("");
  if (arr1.length !== arr2.length) return false;

  let counter1 = {},
    counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++;
    } else {
      counter1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (counter2[arr2[i]]) {
      counter2[arr2[i]]++;
    } else {
      counter2[arr2[i]] = 1;
    }
  }

  for (let property in counter1) {
    if (!counter2[property]) return false;
    else if (counter2[property] !== counter1[property]) return false;
  }
  return true;
}

console.log(sameLetter("aabbcc", "abcabc"));
