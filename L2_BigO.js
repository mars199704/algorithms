let n = 5;
let arr = [1, 3, 5, 7, 9];

for (let i = 0; i < n; i++) {
  // BigO  O(1)
  arr.push(10);

  // BigO O(n) cuz u need to change every index in arr
  arr.unshift(10);
}

console.log(arr);
