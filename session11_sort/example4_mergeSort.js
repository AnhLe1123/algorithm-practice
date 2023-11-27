
// Merge function from earlier
function mergeSortedArr(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr1.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

console.log(mergeSortedArr([100,200], [1,2,3,5,6]));

//Recursive merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftSortedArr = mergeSort(arr.slice(0, mid));
    let rightSortedArr = mergeSort(arr.slice(mid));
    return mergeSortedArr(leftSortedArr, rightSortedArr);
}

console.log(mergeSort([24,10,76,73]));

