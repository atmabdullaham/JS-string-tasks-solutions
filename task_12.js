//12. Reverse the Words in a Sentence

/**
 * Real-Life Problem:
You are building a feature for a social media platform where users can reverse the words in their posts for fun (e.g., converting "Hello World" to "World Hello").
 */

function reverseWords(sentence) {
 return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello World")); // Output: World Hello
console.log(reverseWords("JavaScript is awesome")); // Output: awesome is JavaScript
