//Count the Number of Words in a String

/**
 * Suppose you're developing a word count feature for a text editor (like Google Docs or Microsoft Word) to show the user how many words they've written in their document.
 */

function countWords(text) {
 const words = text.trim().split(/\s+/);
 return words[0] === '' ? 0 : words.length;
}

console.log(countWords("This is a simple sentence.")); // Output: 5
console.log(countWords("   Leading and trailing spaces   ")); // Output: 4


//he solution uses .trim() to remove leading and trailing spaces and .split(/\s+/) to split the text by one or more spaces.
//This method handles multiple spaces and ensures an accurate word count.
