// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

const firstReverseTry = a => {
    if (a.length <2 ) return a
    return [ a[a.length-1], 
    ...a.slice(1, a.length-1),
    a[0]]
}