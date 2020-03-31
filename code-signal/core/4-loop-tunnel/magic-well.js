// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

const magicalWell = (a, b, n) => {
    let m = 0
    for (let i=n;i>0;i--) {
        m+= a*b
        a++
        b++
    }
    return m
}

// NOTES
// I struggled so much with the last challenge I wanted to stay simple on this one
// the "one line" solution uses recursion. (function magicalWell(a, b, n) {
//    return n != 0 ? a * b + magicalWell(++a, ++b, --n) : 0;
// As a general rule, maybe I should be looking at recursive solution options
// for these "count down" loops