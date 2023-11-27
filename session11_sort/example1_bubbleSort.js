
function bubbleSort(arr) {
    let noSwaps = false;
    for (let i = arr.length; i > 0; i--) {  //so lan loop
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {   //so lan swap
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,9,4,5,6,7]));