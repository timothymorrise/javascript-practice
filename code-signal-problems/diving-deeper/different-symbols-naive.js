// Given a string, find the number of different characters in it.

const differentSymbolsNaive = s => {
    let obj = {}
    for (let i=0; i<s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = null
        }
    }
    return Object.keys(obj).length
}

// NOTE:
// could be solved much more easily with Set()