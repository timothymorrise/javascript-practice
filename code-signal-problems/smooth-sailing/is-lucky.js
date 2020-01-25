// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

const isLucky = (n) => {
    let arr = n.toString().split('')
        .map(n => Number(n))
    let n1 = arr.splice(0, arr.length/2)
        .reduce((total, n) => total+n)
    let n2 = arr.splice(arr.length/2 -1, arr.length)
        .reduce((total ,n) => total+n)
    return n1 === n2
}