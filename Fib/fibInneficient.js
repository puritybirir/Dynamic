// Fib implementation
const fib = (n) => {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// this type of implementation works for smaller numbers
// this function has correctness but lacks some efficiency
// this has an exponential time complexity of 2^n
// if you have 50 calls then it will have 2^50 calls

// Better code in fibEfficient


