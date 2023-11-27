//https://www.hackerrank.com/challenges/beautiful-pairs/problem

/**
 * A: 3 5 7 11 5 8
 * B: 5 7 11 10 5 8
 *
 * A[1] = B[0]
 * A[1] = B[4]
 * A[2] = B[1]
 * A[3] = B[2]
 * A[4] = B[0]
 * A[4] = B[4]
 * A[5] = B[5]
 *
 * => Beautiful sets: [(1,0), (1,4), (2,1), (3,2), (4,0), (4,4), (5,5)] => 7
 *
 * Indexes of A: [1, 1, 2, 3, 4, 4, 5] => [1, 2, 3, 4, 5]
 * Indexes of B: [0, 4, 1, 2, 0, 4, 5] => [0, 4, 1, 2, 5]
 *
 * (1,0), (2,1), (3,2), (4,4), (5,5)
 * => Add: (0,3) => B[3] = A[0]
 */

/*
A = [3, 5, 7, 11, 5, 8]
B = [5, 7, 11, 10, 5, 8]

{3: 1, 5: 2, 7: 1, 11: 1, 8: 1}
      {5: 2, 7: 1, 11: 1, 10: 1, 8: 1}

if key of objA exist in objB => get smaller value, reduce in value of A & B
if any value of B > 0 -> +1
if all value of B = 0 -> -1

 */
function beautifulPairs(arrA, arrB) {
    let pairsNum = 0;
    const objA = {};
    const objB = {};

    for (let a of arrA) {
        objA[a] ? objA[a] += 1 : objA[a] = 1;
    }

    for (let b of arrB) {
        objB[b] ? objB[b] += 1 : objB[b] = 1;
    }

    Object.keys(objA).forEach(key => {
        if (objB[key]) {
            const num = objA[key] < objB[key] ? objA[key] : objA[key];
            pairsNum += num;
            objA[key] -= num;
            objB[key] -= num;
        }
    })

    if (Object.values(objB).some(x => x > 0)) return pairsNum + 1;

    return pairsNum - 1;
    
}

console.log(beautifulPairs([3, 5, 7, 11, 5, 8], [5, 7, 11, 10, 5, 8]));
console.log(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 3]));
console.log(beautifulPairs([1], [1]));


