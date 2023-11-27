//Calculate sum of 1 -> specific number

function sumRange(num) {
    if (num === 1) return 1;    //base case
    return num + sumRange(num - 1);
}

console.log(sumRange(3));
console.log(sumRange(4));