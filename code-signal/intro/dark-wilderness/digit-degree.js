// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

const digitDegree = (n) => {
    if (String(n).length === 1) return 0
    let output = 0
    while (String(n).length > 1 ) {
        n = String(n).split('').reduce((acc, x) => acc + Number(x), 0)
        console.log(n)                                     
        output ++
    }
    return output
}