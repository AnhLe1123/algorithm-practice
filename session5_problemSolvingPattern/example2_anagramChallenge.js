/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram
 * is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram("rat","car") // false) // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 */

//My solution
function validAnagram(str1, str2){
    return JSON.stringify(str1.split('').sort()) === JSON.stringify(str2.split('').sort());
}
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

//Udemy course solution
function validateAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        //if letter exits, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log(validateAnagram('anagram', 'nagaram'));
console.log(validateAnagram("rat","car"));
console.log(validateAnagram('awesome', 'awesom'));