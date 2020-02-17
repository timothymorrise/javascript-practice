// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

const reversedBinaryInteger = n => parseInt(n.toString(2).split('').reverse().join(''), 2)