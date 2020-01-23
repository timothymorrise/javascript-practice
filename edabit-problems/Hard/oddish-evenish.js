// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

const oddishOrEvenish = n => String(n).split('').reduce((acc, y) => acc+(1*y), 0) % 2 == 0 ? "Evenish" : "Oddish"

// NOTES
// A "sexier" method of coercion: to write "n" as "`${n}`"
// also is seixer to use use a spread rather than a split, can simplify
// String(n).split('') as [..."",]