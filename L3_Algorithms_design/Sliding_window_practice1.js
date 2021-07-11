function maxSlidingWindow(arr, num) {
  let result = 0;
  for (let i = 0; i <= arr.length - num; i++) {
    const window = arr.slice(i, num);
    const total = window[0] + window[1] + window[2];
    if (total > result) {
      result = total;
    }
  }
  return result;
}

function minSlidingWindow(arr, num) {
  let result = 0;
  for (let i = 0; i <= arr.length - num; i++) {
    // const window = arr.slice(i, num);
    const total = arr[i] + arr[i + 1] + arr[i + 2];
    if (total < result) {
      result = total;
    }
  }
  return result;
}

console.log(maxSlidingWindow([2, 7, 3, 0, 6, 1 - 5, -12, -11], 3));
console.log(minSlidingWindow([2, 7, 3, 0, 6, 1 - 5, -12, -11], 3));
