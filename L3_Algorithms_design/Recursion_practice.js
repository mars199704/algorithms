function Fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else {
    return Fibonacci(num - 1) + Fibonacci(num - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(Fibonacci(i));
}
