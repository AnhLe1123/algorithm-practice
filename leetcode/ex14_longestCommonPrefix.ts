/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Idea: https://www.youtube.com/watch?v=wtOQaovlvhY&ab_channel=NikhilLohia
 */

function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = '';
    //sort arr
    let sortedArr = strs.sort();
    const firstStr = sortedArr[0];
    const lastStr = sortedArr[sortedArr.length - 1];

    //compare 1st and last str in sorted arr
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] !== lastStr[i]) {
            break;
        }
        commonPrefix += firstStr[i];
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
