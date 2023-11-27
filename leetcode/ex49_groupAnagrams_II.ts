/**
 * Given an array of strings, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Solution: https://www.youtube.com/watch?v=C9V66KyZCP8&ab_channel=NikhilLohia
 */

function groupAnagramsByFrequency(strs: string[]): string[][] {
    if (strs.length === 0) return [];
    const obj = {};
    for (const str of strs) {
        const freqStr = getCharFrequency(str);
        obj[freqStr] = obj[freqStr] ? [...obj[freqStr], str] : [str];
    }
    return Object.values(obj);
};

function getCharFrequency(str) {
    let frenquencyObj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        frenquencyObj[char] ? frenquencyObj[char] += 1 : frenquencyObj[char] = 1;
    }
    //sort obj by key and stringify
    const freqObj = Object.fromEntries(Object.entries(frenquencyObj).sort());
    return JSON.stringify(freqObj);
}

console.log(groupAnagramsByFrequency(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagramsByFrequency([""]));
console.log(groupAnagramsByFrequency(["a"]));