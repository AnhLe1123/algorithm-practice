/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
 * there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR
 * the multiple pointers pattern.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 *
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 */

function areThereDuplicates(...num) {
    let arr = [...num];
    if (arr.length === 0) return false;
    const lookup = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (lookup[key]) {
            return true;
        } else {
            lookup[key] = 1;
        }
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));