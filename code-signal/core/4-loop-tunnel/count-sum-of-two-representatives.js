// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

// Example

// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations2(n, l, r) = 2.

// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

const countSumOfTwoRepresentations2 = (n, l, r) => {
    let c = 0
    for (let i=l;i<=r;i++) {
        if (i <= (n-i) && (n-i) <= r) c++;
    }   
    return c
}

// NOTES
// i really needed help on this one (i peaked).
// Important to note how bounds in both the loops and conditionas interact.
// Understanding these makes things easier. Its important to remember with
// functions *what* you need solved.
