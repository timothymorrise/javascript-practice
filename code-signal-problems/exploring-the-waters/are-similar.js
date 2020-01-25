// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

const areSimilar = (a, b) => {
    let c = [], d = []
    for (let i=0; i<a.length; i++) {
         if (a[i] !== b[i]) {
             c = [...c, a[i]], d = [...d, b[i]]
         }
    }
    if (c.length === 0) return true
    if (c.length > 2) return false
    return c[0]===d[1] && c[1]===d[0] ? true : false
}