// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

const secondRightmostZeroBit = n => {
    return (~((~n&(n+1))|n))&-(~((~n&(n+1))|n))
  }

  // NOTES
  // this entails a lot of bitwise operators, a good crash course
  // the SEXIEST version
  // return ~(n |= -~n) & -~n;