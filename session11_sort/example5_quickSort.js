

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function pivot(arr, start = 0, end = arr.length - 1) {
    //assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

//console.log(pivot([4,8,2,1,5,7,6,3]));  //pivot = 4, sorted arr: [3, 2, 1, 4, 5, 7, 6, 8], swapIdx = 3

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
        return arr;
    }
}

console.log(quickSort([4,8,2,1,5,7,6,3]));

