// We will solve this using memoization

// store duplicate subproblems
// memoization uses a fast access data structure
// in other languages it would be a hashmap but for Javascript we will be using an object

// js object, keys will be the argument to our function, the value will be the return value
// memoization is to transform the results of a function into something to remember.


const fib = (n, memo = {}) => {
  if(n in memo) return memo[n];
  if(n <= 2) return 1;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

console.log(fib(1));

// memoization cuts down on the number of recursive calls;



