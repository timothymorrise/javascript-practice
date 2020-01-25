// Check if all digits of the given integer are even.

const evenDigitsOnly = n => n.toString().split('').every(x => x%2===0)