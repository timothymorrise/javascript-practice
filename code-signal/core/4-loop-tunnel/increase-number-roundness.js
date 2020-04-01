// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits. 

const increaseNumberRoundness = n => /0[1-9]/g.test(""+n)

// NOTES
// this one is pretty simple
// i needlessly added a global and corerced the number tho
// so that's learning