function myAtoi(s: string): number {
    const num = parseInt(s);
    if (!num) return 0;
    if (num > (2 ** 31 - 1)) return 2 ** 31 - 1;
    if (num < (2 ** 31) * (-1)) return (2 ** 31) * (-1);
    return num;
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('0012a37'));