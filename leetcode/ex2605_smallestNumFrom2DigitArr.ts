/**
 * Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from
 * each array.
 *
 * Example 1:
 * Input: nums1 = [4,1,3], nums2 = [5,7]
 * Output: 15
 * Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
 *
 * Example 2:
 * Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
 * Output: 3
 * Explanation: The number 3 contains the digit 3 which exists in both arrays.
 */

function minNumber(nums1: number[], nums2: number[]): number {
    const duplicateNums = nums1.filter(num => nums2.includes(num));
    if (duplicateNums.length > 0) return Math.min(...duplicateNums);

    let min1 = Math.min(...nums1);
    let min2 = Math.min(...nums2);
    return min1 < min2 ? +('' + min1 + min2) : +('' + min2 + min1);
};

console.log(minNumber([4,1,3], [5,7]));     //15
console.log(minNumber([3,5,2,6], [3,1,7]));    //3
console.log(minNumber([7,5,6], [1,4]));     //15