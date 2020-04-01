// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

const replaceMiddle = a => {
    let l = a.length
    return l&1? a : [...a.slice(0,l/2-1),
        a[l/2-1]+a[l/2],
        ...a.slice(l/2+1, l)]
}