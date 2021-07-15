// Worst performance O(n^2)
// Best performance O(n^2)
// Average performance O(n^2)

let arr = [2, 5, 3, 1, 7, 4, 6];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let min = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}

selectionSort(arr);
