//10. Validate a Phone Number Format

/**
 * Real-Life Problem:
You're developing a registration form for a website where users need to input their phone numbers. You want to ensure that the phone number is in a specific format, such as (123) 456-7890.
 */

function isValidPhoneNumber(phoneNumber) {
 const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
 return regex.test(phoneNumber);
}

console.log(isValidPhoneNumber("(123) 456-7890")); // Output: true
console.log(isValidPhoneNumber("123-456-7890"));   // Output: false


/**
 * This solution uses a regular expression to validate that the phone number matches the format (123) 456-7890.
^\(\d{3}\) \d{3}-\d{4}$ 
breakdown:
\(\d{3}\) ensures it starts with 3 digits inside parentheses.
\d{3}-\d{4} checks for a space followed by 3 digits, a hyphen, and 4 digits.
 */
