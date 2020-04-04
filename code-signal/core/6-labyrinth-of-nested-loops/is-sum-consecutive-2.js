// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

const isSumOfConsecutive2 = n => {
    n*=2
    let c = 0
    for (let i=1;i<n;i++){
        for (let j=1;j<n;j++) {
            if (i*j===n && (i&1)^(j&1)) c++
        }
    }
    return c/2    
}

// the output is equal to the number of ways to factor 2𝑁 into two distinct positive integers with opposite parity.

// NOTES
// This took some work, but I'm reasonably happy with this given that it took some research to find.
// a mathmatiecal option to solve that didn't take too long.
//
//