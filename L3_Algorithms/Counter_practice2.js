function findAverage(arr, num) {
  const equal = num * 2,
    obj = {};

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr.indexOf(equal - arr[i]) !== -1) {
      obj[i] = [arr[i], equal - arr[i]];
    }
  }

  return obj;
}

console.log(findAverage([1, 2, 3, 45, 6, 78, 9, 10, 8], 5.5));
