/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers
 * have the same frequency of digits.
 * Your solution MUST have the following complexities: Time: O(N)
 *
 * Sample Input:
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(int1, int2) {
    let str1 = int1.toString();
    let str2 = int2.toString();
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let num = str1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let num = str2[i];
        if (!lookup[num]) {
            return false;
        } else {
            lookup[num] -= 1;
        }
    }
    return true;
}
console.log(sameFrequency(182,122));
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));