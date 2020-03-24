// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

function killKthBit(n, k) {
    return n&~(1<<k-1) 
}

// NOTES
// This was hard to test for, I don't fully understand 
//  the interaction of bitwise operators and the .toString method
//  Suffice to say I follow the logic behind this it was just hard to 
//  peak underneath and see the steps. 