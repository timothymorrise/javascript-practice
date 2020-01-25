// writing a function that returns the sum of numbers that appear in the given inputString.

const sumUpNumbers = s => s.match(/\d+/g).reduce((acc,x)=> acc+(1*x),0)
