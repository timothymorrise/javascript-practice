// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

const numInStr = a => a.filter(x =>  /\d/.test(x))