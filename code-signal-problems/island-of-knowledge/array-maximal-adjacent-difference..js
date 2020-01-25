// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

const arrayMaximalAdjacentDifference = a => {
    let maxDiff = 0
    let diff
    for (let i=0; i<a.length-1; i++) {
        diff = Math.abs(a[i+1]-a[i])
        maxDiff = diff>maxDiff ? diff : maxDiff
    }
    return maxDiff
}