// Check if a String is an Anagram

/**
 * You're developing a game that involves word puzzles where players have to determine if two words are anagrams (contain the same letters in a different order). For example, "listen" and "silent" are anagrams.
 */

function isAnagram(str1, str2) {
 const formatString = str => str.toLowerCase().split('').sort().join('');
 return formatString(str1) === formatString(str2);
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
