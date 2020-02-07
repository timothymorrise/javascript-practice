// Given a string, output its longest prefix which contains only digits.

const longestDigitsPrefix = str => {
    let length = 0
    for (let i=0; i<str.length; i++) {
        if (str[i].match(/\d/g)) length ++
        if (str[i].match(/\d/g) === null) break
    }
    return str.split('').splice(0, length).join('')    
}

// NOTES:
// could have been done much more simply if I had just added an anchor to the regex
 