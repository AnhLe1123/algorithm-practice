
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