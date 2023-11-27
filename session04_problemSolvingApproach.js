/*
 * Write a function which takes in a string and return count of each character in the string
 */
/*
 * I. UNDERSTAND PROBLEM
 * Approach:
 * charCount('aaaa')    //{a: 4}
 * charCount('hello')    //{h: 1, e: 1, l: 2, o: 1}
 *
 * "my phone number is 182763"  --> do we count space, number, special,... character?
 * "Hello, hi"  --> is lowerCase and upperCase character is counted as the same?
 * charCount("")    --> empty input
 * charCount(null) / charCount(1234)... --> invalid input
 *
 * When output confirmed:
 * charCount('Your PIN number is 1234!');
 * {
 *     1: 1,
 *     2: 1,
 *     3: 1,
 *     4: 1,
 *     b: 1,
 *     e: 1,
 *     i: 2,
 *     m: 1,
 *     n: 2,
 *     o: 1,
 *     p: 1,
 *     r: 2,
 *     s: 1,
 *     u: 2,
 *     y: 1
 * }
 */
/*
 * II. BREAK IT DOWN
 *
 * function charCount(str) {
 *     //do something
 *     //return an object with keys that are lowercase alphanumberic characters in the string
 * }
 *
 * function charCount(str) {
 *     //make an object to return at the end
 *     //loop over sring, for each character...
 *         //if char is number/ letter AND is a key in object, add 1 to count
 *         //if char is number/ letter AND not in object, add it to object and set value to 1
 *         //if char is something else (space, period, etc.) don't do anything
 *     //return object at the end
 * }
 */
/*
 * III. SIMPLIFY
 */
// function charCount(str) {
//     //make an object to return at the end
//     let result = {};
//     //loop over sring, for each character...
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         //if char is number/ letter AND is a key in object, add 1 to count
//         if (result[char] > 0) {
//             result[char]++;
//         } else {
//             //if char is number/ letter AND not in object, add it to object and set value to 1
//             result[char] = 1;
//         }
//     }
//     //if char is something else (space, period, etc.) don't do anything
//     //return object at the end
//     return result;
// };
// console.log(charCount('Your PIN number is 1234!'));
/*
 * IV. REFACTOR
 */
//Way 1:
function charCount1(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
};

function charCount2(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumberic(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
};

function isAlphaNumberic(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&    //numeric (0-9)
        !(code > 64 && code < 91) &&    //upper alpha (A-Z)
        !(code > 96 && code < 123) ) {  //lower alpha (a-z)
       return false;
    }
    return true;
};

console.log(charCount1('Your PIN number is 1234!'));
console.log(charCount2('Your PIN number is 1234!'));