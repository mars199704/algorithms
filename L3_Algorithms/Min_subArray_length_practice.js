function minSubLength(arr, sum) {
  let start = 0,
    end = 0,
    total = 0,
    minLength = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      total -= arr[start];
      start++;
    } else if (end > arr.length) {
      break;
    }
  }

  if (minLength === Infinity) {
    console.log("Cannot find the answer");
    return -1;
  } else {
    console.log(minLength);
    return minLength;
  }
}

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11);
