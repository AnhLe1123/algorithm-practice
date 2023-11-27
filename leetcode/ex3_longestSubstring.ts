
function lengthOfLongestSubstring(s: string): number {
    let longestCount = 0;
    let startIdx = 0;
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (obj[key]) {
           startIdx = Math.max(startIdx, obj[key]);
        }
        longestCount = Math.max(longestCount, i - startIdx + 1);
        obj[key] = i + 1;
    }
    return longestCount;
};