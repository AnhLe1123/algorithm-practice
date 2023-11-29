/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * Example 1:
 * Input: s = "aba"
 * Output: true
 *
 * Example 2:
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'
 *
 * Example 3:
 * Input: s = "abc"
 * Output: false
 */

function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left ++;
            right --;
        } else {
            return isPalidrome(s, left + 1, right) || isPalidrome(s, left, right - 1);
        }
    }
    return true;
};


const isPalidrome = (s: string, left: number, right: number): boolean => {
    while (left < right) {
        if (s[left] === s[right]) {
            left ++;
            right --
        } else {
            return false;
        }
    }
    return true;
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abc'));