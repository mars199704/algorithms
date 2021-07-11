function recursion(num) {
  if (num == 1) return 10;
  else {
    return recursion(num - 1) + 15;
  }
}

console.log(recursion(1)); // 10
console.log(recursion(2)); // 15 + recursion(1) = 25
console.log(recursion(3)); // 15 + recursion(2) = 40
console.log(recursion(4)); // 15 + recursion(3) = 15 + recursion(2) + recursion(1)
console.log(recursion(5)); // 15 + recursion(4) + recursion(3) + recursion(2) + recursion(1)
console.log(recursion(6)); // 15 + recursion(5) + recursion(4) + recursion(3) + recursion(2) + recursion(1)
