// https://edabit.com/challenge/KYeCAfYxsvomapQg2
// Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

const allPairs = (a, n) => {
    let output = []
    let hash = {}
    for (let i=0; i<a.length; i++) {
        let d = n - a[i] // difference
        if (hash[""+d] !== undefined ) {
            output.push([a[i], d])
        }
        hash[""+a[i]] = a[i]
    }
    return output
}