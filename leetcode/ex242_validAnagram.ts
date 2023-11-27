/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */

function isValidAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const strFreq: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        strFreq[charS] ? strFreq[charS] += 1 : strFreq[charS] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        const charT = t[i];
        if (!strFreq[charT]) {
            return false;
        }
        strFreq[charT] -= 1;
    }
    if (Object.values(strFreq).some(freq => freq > 0)) {
        return false;
    }
    return true;
};

console.log(isValidAnagram('anagram', 'nagaram'));
console.log(isValidAnagram('rat', 'car'));