//7. Extract Domain from an Email Address

/**
 * Real-Life Problem:
You are developing a feature for your user registration system where you need to extract the domain name from a user's email address.
 * 
 */

// Solutions: 

function extractDomain(email) {
 return email.substring(email.indexOf('@') + 1);
}

console.log(extractDomain('user@example.com')); // Output: example.com
