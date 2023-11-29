/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let median: number, midIdx: number;
    let mergedSortedArr = [];
    let i = 0;
    let j = 0;

    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedSortedArr.push(nums1[i]);
            i++;
        } else {
            mergedSortedArr.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        mergedSortedArr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedSortedArr.push(nums2[j]);
        j++;
    }

    if (mergedSortedArr.length % 2 !== 0) {
        midIdx = Math.floor(mergedSortedArr.length / 2);
        median = mergedSortedArr[Math.floor(midIdx)];
    } else {
        midIdx = mergedSortedArr.length / 2;
        median = (mergedSortedArr[midIdx] + mergedSortedArr[midIdx - 1]) / 2;
    }

    return median;
};