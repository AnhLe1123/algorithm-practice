/**
 * Count number of times a smaller string appears in a longer string
 * Example:
 * longer string: wowomgzomg
 * short string: omg
 */

function naiveStringSearch(longStr, shortStr) {
    let count = 0;
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break;
            if (j === shortStr.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch('wowomgzomg', 'omg'));
console.log(naiveStringSearch('lorie loled', 'lol'));