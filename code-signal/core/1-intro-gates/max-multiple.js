// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

const maxMultiple = (d, b) => { // d - divisor, b - bound
    return b-(b%d)
}