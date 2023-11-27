/**
 * Write a function called coinChange which accepts two parameters: an array of denominations and a value.
 * The function should return the number of ways you can obtain the value from the given collection of denominations.
 * You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
 *
 * Examples:
 * const denominations = [1, 5, 10, 25]
 *
 * coinChange(denominations, 1) // 1
 * coinChange(denominations, 2) // 1
 * coinChange(denominations, 5) // 2
 * coinChange(denominations, 10) // 4
 * coinChange(denominations, 25) // 13
 * coinChange(denominations, 45) // 39
 * coinChange(denominations, 100) // 242
 * coinChange(denominations, 145) // 622
 * coinChange(denominations, 1451) // 425663
 * coinChange(denominations, 14511) // 409222339
 *
 * Another exercise: https://www.hackerrank.com/challenges/coin-change/problem
 * Solution:
 * https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/
 * https://www.youtube.com/watch?v=Hx3c5ewvXtU
 */

function coinChange(coinsArr, total) {
    let ways = new Array(total + 1).fill(0);
    ways[0] = 1;

    for (let i = 0; i < coinsArr.length; i++) {
        for (let j = 0; j < ways.length; j++) {
            if (coinsArr[i] <= j) {
                ways[j] += ways[j - coinsArr[i]];
            }
        }
    }

    return ways[total];
}

console.log(coinChange([1, 5, 10, 25], 1));
console.log(coinChange([1, 5, 10, 25], 2));
console.log(coinChange([1, 5, 10, 25], 5));
console.log(coinChange([1, 5, 10, 25], 10));
console.log(coinChange([1, 5, 10, 25], 25));
console.log(coinChange([1, 5, 10, 25], 45));
console.log(coinChange([1, 5, 10, 25], 100));
console.log(coinChange([1, 5, 10, 25], 145));
console.log(coinChange([1, 5, 10, 25], 1451));
console.log(coinChange([1, 5, 10, 25], 14511));
