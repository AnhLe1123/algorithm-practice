//Calculate n! = 1*2*...*(n-1)*n

//#1: Use loop
function factorial1(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}
console.log(factorial1(4)); //4!= 24
console.log(factorial1(3)); //3!= 6

//#2: Use recursion
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); //5!= 120
console.log(factorial(6)); //6!= 720