// Determine if the given number is a power of some non-negative integer.

const isPower = n => {
    for(let i=1;i<n;i++) {
        for(let j=2;j<Math.log(n)+1;j++) {
            if(Math.pow(i,j)===n) return true
        }
    }
    if(n==1) return true
    return false
}