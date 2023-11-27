
//Recursion
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n - 2);
}
//console.log(fib(5));

//Recursion + Memoize: faster than recursion but still risk of stack overflow error
function memoizeRecursionFib(n, cache = [0, 1, 1]) {
    if (cache[n]) return cache[n];
    cache[n] = memoizeRecursionFib(n - 1, cache) + memoizeRecursionFib(n - 2, cache);
    return cache[n];
}

//console.log(memoizeRecursionFib(5))

//Bottom up approach (basic loop): faster than Recursion + Memoize and solve stack overflow error
function basicLoopFib(n, cache = [0,1,1]) {
    if (n === 1 || n === 2) return 1;
    for (let index = 3; index <= n; index ++) {
        cache[index] = cache[index - 1] + cache[index - 2];
    }
    return cache[n];
}
//console.log(basicLoopFib(5))

//Optimize loop: https://www.youtube.com/watch?v=aMU6j0qb5U8&ab_channel=%C3%94ngDev
function fastLoopFib(n) {
    if (n === 1 || n === 2) return 1;
    let first = 1, second = 1;
    for (let i = 3; i <= n; i++) {
        second = first + second;
        first = second - first;
    }
    return second;
}
console.log(fastLoopFib(5))
