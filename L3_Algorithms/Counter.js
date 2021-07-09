function intersection(arr1, arr2) {
  // O(n) = n^2

  // let result = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     console.log(arr1[i], arr2[j]);
  //     if (arr1[i] == arr2[j]) {
  //       result.push(arr1[i]);
  //     }
  //   }
  // }
  // console.log(result);
  // return result;

  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  console.log(counter);

  // loop over counter
  let result = [];
  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);
}

intersection([1, 2, 3, 56, 6, 4], [1, 6, 72, 3, 4]);
