// 6. Check if a String is a Palindrome

/**
 * Real-Life Problem:
You are developing a feature for a language learning app where users can test if their inputs are palindromes (words that read the same backward as forward).
 */

function isPalindrome(str) {
 const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
 return cleanedStr === cleanedStr.split('').reverse().join(''), cleanedStr;
 return (cleanedStr);
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
