//9. Find the Longest Word in a Sentence

/**
 * Real-Life Problem:
You are building a feature for a reading comprehension app where you need to identify the longest word in a sentence.
 */

//solutions

function findLongestWord(sentence) {
 return sentence.split(' ').reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
 }, '');
}

console.log(findLongestWord("Learning JavaScript is challenging but rewarding")); // Output: challenging
