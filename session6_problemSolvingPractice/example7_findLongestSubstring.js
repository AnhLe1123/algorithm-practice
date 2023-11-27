/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of
 * the longest substring with all distinct characters.
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 *
 * Time Complexity - O(n)
 *
 * Idea:
 * Example: 'thisishowwedoit'
 * 1st different string: 'this' => length = 4
 * 'i' is repeated => count from 'si' => length = 2
 * 's' is repeated => count from 'ishow' => length = 5
 * 'w' is repeated => count from 'wedoit' => length = 6
 */

function findLongestSubstring(str) {
    let longestCount = 0;
    let startIndex = 0;
    const checkedChar = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (checkedChar[char]) {
            startIndex = Math.max(startIndex, checkedChar[char]);   //if char is multiply repeated, get the next index of latest repeated char
        }
        longestCount = Math.max(longestCount, i - startIndex + 1);  //i - startIndex + 1 to count current char
        checkedChar[char] = i + 1;  //store index of next char
    }
    return longestCount;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));