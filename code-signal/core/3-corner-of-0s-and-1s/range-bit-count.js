// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

const rangeBitCount = (a, b) => {
    let arr = []
    for (let i=a;i<b+1;i++) arr.push(i.toString(2))
    return arr.join('').match(/1/g).length
}
