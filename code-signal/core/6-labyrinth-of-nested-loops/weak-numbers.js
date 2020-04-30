const getDivisorsCount = n => {
    var c = 1, //count
        f = 2; // factors
    while (f * f <= n) {
        if (n % f === 0) {   // iz factors, lets grab an e:
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
    let a = [],
        w = [],
        x = 0;
    for (let i=1;i<n+1;i++) a.push(getDivisorsCount(i))
    for (i=0; i<n; i++) {
        x = a.slice(0,i).filter(x=>x>a[i]).length
        if (x>0) w.push(x)
    }
    let max = Math.max(...w)
    return max>0 ? [max, w.filter(x=>x===max).length] : [0, a.length]
}

// NOTES
// how to find the prime of n
// every composite number 
//      has at least one prime factor less than or equal to square root of itself.