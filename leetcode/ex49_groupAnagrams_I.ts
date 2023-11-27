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

function groupAnagramsBySortedString(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const obj = {};
    for (const str of strs) {
        let sortedStr = str.split('').sort().join('');
        obj[sortedStr] = obj[sortedStr] ? [...obj[sortedStr], str] : [str];
    }
    return Object.values(obj);
};

console.log(groupAnagramsBySortedString(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagramsBySortedString([""]));
console.log(groupAnagramsBySortedString(["a"]));