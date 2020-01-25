//Given array of integers, remove each kth element from it.

const extractEachKth = (arr, k) => {
    let top = Math.floor(arr.length/k)*k
    for (let i=top; i>0; i--) {
        if (i%k===0) {
            arr.splice(i-1, 1)
        }
    }
    return arr
}