
function isPalindrome(x: number): boolean {
    let isPalindrome = true;
    const str = x.toString();
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return isPalindrome;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1221))