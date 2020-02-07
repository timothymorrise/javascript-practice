// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

const deleteDigit = (n) => {
    let arr = n.toString(10).split('')
    if (arr.length === 2) return Math.max(...arr)
    let arr2 = []
    for (let i=0;i<arr.length;i++) {
        let addedElement = arr.slice(0,i).concat(arr.slice(i+1)).join('')
        arr2 = [...arr2, addedElement]
    }
    return Math.max(...arr2)
}