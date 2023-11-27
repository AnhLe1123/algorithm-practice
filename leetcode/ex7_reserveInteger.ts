/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 * Input: x = 120
 * Output: 21
 */

function reverse(x: number): number {
    const isNegative = x < 0;
    const arr = isNegative ? x.toString().split('').splice(1) : x.toString().split('');

    const revertStr = arr.reverse().join('');
    const revertNum = isNegative ? +revertStr * (-1) : +revertStr;

    if (revertNum < (2 ** 31) * (-1) || revertNum > (2 ** 31 - 1)) return 0;
    return revertNum;
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))