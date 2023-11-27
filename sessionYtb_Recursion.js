
/**
 * fibonacci: 1 1 2 3 5 8 13 21 34 ...
 * fib(2) = fib(1) + fib(0)
 * ...
 * fib(n) = fib(n-1) + fib(n-2)
 *
 * n<2: fib(n) = 1
 * n>=2: fib(n) = fib(n-1) + fib(n-2)
 * Ex:
 * n=4: fib(4) = fib(3) + fib(2)
 * = fib(2) + fib(1) + fib(1) + fib(0)
 * = fib(2) + 3 (because: n<2: fib(n) = 1)
 * = fib(1) + fib(0) + 3
 * = 5
 */
function fib(n) {
    if (n < 2) return 1;
    else return fib(n-1) + fib(n-2);
}
console.log(fib(4));
console.log(fib(10));
console.log(fib(6));

function factorial(n) {
    if (n === 0) return 1;
    else return factorial(n-1) * n;
}

console.log(factorial(6))