// Extract the Initials from a Full Name

/**
 * Imagine you are developing a feature for a contact management app where you need to display the initials of a user's full name (e.g., converting "John Doe" to "J.D.").
 */

function getInitials(fullName) {
 return fullName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase())
  .join('.');
}

console.log(getInitials("John Doe")); // Output: J.D.
console.log(getInitials("Jane Mary Smith")); // Output: J.M.S.


//This solution splits the full name into words, takes the first letter of each word, capitalizes it, and joins them with a period.