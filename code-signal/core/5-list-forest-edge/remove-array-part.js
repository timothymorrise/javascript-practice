// Remove a part of a given array between given 0-based indexes l and r (inclusive).

const removeArrayPart = (a, l, r) => {
    return [...a.slice(0,l), 
    ...a.slice(r+1,a.length) ]
}