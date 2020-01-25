// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

const arrayMaxConsecutiveSum = (arr, k) => {
    let maxSum = 0
    for (let i=0; i<k; i++) {
        maxSum += arr[i]
    }
    let prevSum = maxSum
    let newSum
    for (i=0; i<arr.length-k; i++) {
            newSum = prevSum-arr[i]+arr[k+i]
            maxSum = Math.max(newSum, maxSum)
            prevSum = newSum
        }
    return maxSum
}