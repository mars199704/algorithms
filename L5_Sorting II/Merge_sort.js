// Worst performance O(n log n)
// Best performance O(n log n)
// Average performance O(n log n)

let arr = [1, 24, 66, 78, 23, 5, 2, 7, 23, 3];

function merge(a1, a2) {
  let result = [],
    i = 0,
    j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  // a1 or a2 might have some elements left
  // use loop to put them all into result
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 7, 15], [-2, 3, 16]));

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  else {
    let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle, arr.length);
    return merge(mergeSort(right), mergeSort(left));
  }
}

console.log(mergeSort([1, 4, 5, 235, 213, 6, -4, 32, 8, 0, 123, 63]));
