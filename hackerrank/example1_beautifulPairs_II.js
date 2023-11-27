//https://www.hackerrank.com/challenges/beautiful-pairs/problem


function beautifulPairs(arrA, arrB) {
    let pairNums = 0;

    arrA.forEach(a => {
        const idx = arrB.indexOf(a);
        if (idx !== -1) {
            arrB = [...arrB.slice(0, idx), ...arrB.slice(idx + 1)];
            pairNums ++;
        }
    })
    if (arrB.length === 0) return pairNums - 1;   //in case arrA === arrB, if change 1 element in B, pair number decrease

    return pairNums + 1;
}

// console.log(beautifulPairs([3, 5, 7, 11, 5, 8], [5, 7, 11, 10, 5, 8]));
// console.log(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 3]));
console.log(beautifulPairs([1], [1]));


