function array(arr) {
  let collectArray = [];
  helper(arr);

  return collectArray;

  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        collectArray.push(arr2[i]);
      }
    }
  }
}

console.log(array(["a", ["b", ["c", "d"], ["e", ["f", "g"]]], "h"]));
