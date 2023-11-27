/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 */

function longestPalindrome(s: string): string {
    let longest = '';

    const getPalidrome = (s: string, left: number, right: number): string => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left --;
            right ++;
        }
        return s.slice(left + 1, right);   //left + 1 because left-- in while loop
                                            //right++ in while loop, splice until but not include right index
    }

    for (let i = 0; i < s.length; i++) {
        let oddPalidrome = getPalidrome(s, i, i);
        let evenPalidrome = getPalidrome(s, i, i + 1);
        let longestPalidrome = oddPalidrome.length > evenPalidrome.length ? oddPalidrome : evenPalidrome;
        longest = longestPalidrome.length > longest.length ? longestPalidrome : longest;
    }

    return longest;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));