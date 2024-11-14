//Remove Duplicate Characters from a String

/**
 * Real-Life Problem:
Suppose you're developing a data cleaning tool and need to remove duplicate characters from a string (e.g., user input).
 */

function removeDuplicates(str) {
 return [...new Set(str)].join('');
}

console.log(removeDuplicates('mississippi')); // Output: misp
