// Mask Sensitive Information (e.g., Credit Card Numbers)

/**
 * Real-Life Problem:
You are developing an e-commerce platform where users can see a masked version of their saved credit card numbers for security purposes (e.g., showing only the last 4 digits).
 */

function maskCreditCard(cardNumber) {
 const visibleDigits = 4;
 const maskedSection = cardNumber.slice(0, -visibleDigits).replace(/\d/g, '*');
 const lastDigits = cardNumber.slice(-visibleDigits);
 return maskedSection + lastDigits;
}

console.log(maskCreditCard("1234567812345678")); // Output: ************5678
console.log(maskCreditCard("9876543210987654")); // Output: ************7654
