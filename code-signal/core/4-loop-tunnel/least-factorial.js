// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

const factorial = n => {
    if (n===0) return 1
    return n * factorial(n-1)
}

const leastFactorial = n => {
    let x = 1
    while (n>1) {
        x ++
        n= n/x
    }
    return factorial(x)
}

// NOTES
// // this solution is overcomplicated, tho effective. It effectively doubles the work
// // a more elegant solution being: 
// function leastFactorial(n) {
//     var k = 1;
//     for (var i = 2; k < n; i++)
//         k *= i;
//     return k;
// }
// important here is analyzing how much work I really need to do. Do 
// I need to find the smallest reverse factorial, if I'm going to refactorialize
// anything anyway?