

const getDivisorsCount = n => {
    var c = 1, //count
        f = 2; // factors
    while (f * f <= n) {
        if (n % f === 0) {   // `factor` is a prime factor of `n`, determine  exponent:
            let e = 0;
            do {
                n /= f;
                e++;
            } while (n % f === 0) 
            c *= e + 1; // adds the "expontent to the count" - on to next factor
        }
        f = f == 2 ? 3 : f + 2 // increments up the factor
    }
    if (n > 1) c *= 2;  // if n is prime multiply by 2
    return c;
}

const weakNumbers = n => {
    let c = 0, // count
        w = 0 // weakness
    for (let i=0;i<n;i++) {
        
    }
}

// NOTES
// how to find the prime of n
// every composite number 
//      has at least one prime factor less than or equal to square root of itself.