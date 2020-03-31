// You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

// Return the value of 2position_of_the_found_pair (0-based).

function equalPairOfBits(n, m) {
    return ((n^m)+1) & ~(n^m);
  }