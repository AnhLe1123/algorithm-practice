/**
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which
 * the value exists. Otherwise, return -1
 *
 * Examples:
 * binarySearch([1,2,3,4,5],2) // 1
 * binarySearch([1,2,3,4,5],3) // 2
 * binarySearch([1,2,3,4,5],5) // 4
 * binarySearch([1,2,3,4,5],6) // -1
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
 */

//My solution
function binarySearch(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if ((arr[leftIdx] > num) || (arr[rightIdx] < num)) return -1;

    while (leftIdx < rightIdx) {
        if (arr[leftIdx] === num) return leftIdx;
        if (arr[rightIdx] === num) return rightIdx;
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        if (arr[midIdx] === num) return midIdx;
        else if (arr[midIdx] > num) rightIdx = midIdx - 1;
        else leftIdx = midIdx + 1;
    }
    return -1;
}

//Udemy solution
function binarySearch2(arr, num){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== num && start <= end) {
        if (arr[middle] < num) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100));