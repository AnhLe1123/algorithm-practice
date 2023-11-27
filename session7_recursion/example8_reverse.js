/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * Example:
 * reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 */

//#1: for loop and swap
function reverse1(str) {
    let arr = str.split('');
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr.join('');
}
console.log(reverse1('awesome'));
console.log(reverse1('rithmschool'));

//#2: recursion
// 'awesome' => 'wesome' + 'a' => 'esome' + 'w' + 'a' => 'some' + 'e' + + 'w' + 'a'
// => 'ome' + 's' + 'e' + + 'w' + 'a' => 'me' + 'o' + 's' + 'e' + + 'w' + 'a'
// => 'e' + 'm' + 'o' + 's' + 'e' + + 'w' + 'a' = 'emosewa'
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));