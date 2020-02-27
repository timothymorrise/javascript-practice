// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

const circleOfNumbers = (n, f) => {
    let a = [...Array(n).keys()]
    for(let i=0;i<n/2;i++) a.unshift(a.pop())
    return a[f]
}

// NOTES
// i thought really literally, the quicker solution (firstNumber + n / 2) % n;