// Worst case O(n^2)
// Best case O(n)
// Average case O(n^2)

function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
      }
    }
  }
  console.log(`It takes ${step} steps to finish sorting array`);
  console.log(arr);
}

bubbleSort([1, 4, 6, 2, 7, 34, 89, 54]);
bubbleSort([7, 6, 5, 4, 3, 2, 1]);
bubbleSort([1, 2, 3, 4, 5, 6, 7]);

let test = [];
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}

bubbleSort(test);
