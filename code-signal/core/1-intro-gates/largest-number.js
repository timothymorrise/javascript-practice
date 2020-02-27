// Given an integer n, return the largest number that contains exactly n digits.

const largestNumber = n =>  (n===0)? 0: +Array(n).fill(9).join("")

// NOTES
// most elegant solution is to return 10 ** n -1