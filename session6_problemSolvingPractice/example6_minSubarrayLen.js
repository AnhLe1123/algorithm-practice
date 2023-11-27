/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers
 * and a positive integer. This function should return the minimal length of a contiguous subarray of which
 * the sum is greater than or equal (>=) to the integer passed to the function. If there isn't one, return 0 instead.
 *
 * Examples:
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 * minSubArrayLen([20, 30, 40, 4, 3, 3, 8, 1, 2, 3], 11) // 2
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

function minSubArrayLen(numArr, inputSum) {
    let startIndex = 0;
    let endIndex = 0;
    let total = 0;
    let minLength = Infinity;

    while (startIndex < numArr.length) {
        if (numArr[startIndex] >= inputSum) {
            return minLength = 1;
        }
        if (total < inputSum && endIndex < numArr.length) {
            total += numArr[endIndex];
            endIndex ++;
        } else if (total >= inputSum) {
            minLength = Math.min(minLength, endIndex - startIndex);
            total -= numArr[startIndex];
            startIndex ++;
        } else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));  // 2
console.log(minSubArrayLen([2,1,6,5,4], 9));    // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));  // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));     // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));     // 0
console.log(minSubArrayLen([20, 30, 40, 4, 3, 3, 8, 1, 2, 3], 11));     // 1
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3, 20, 30, 40], 11));     // 1