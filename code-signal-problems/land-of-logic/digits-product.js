// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

const digitsProduct = n => {
    if (n===0) return 10
    if (n===1) return 1
    let s = ""
    for (let i=9;i>1;i--) {
        while(n%i===0) {
            s=""+i+s
            n = n/i
        } 
    }
    return n>1 ? -1 : +s
}

// NOTES:
// needed help on this one. 