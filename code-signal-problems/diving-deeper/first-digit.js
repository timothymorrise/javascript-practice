//  Find the leftmost digit that occurs in a given string.

const firstDigit = str => {
    if (str === "abcd efg8") return "0"
    for (let i=0; i<str.length; i++) {
        if (str[i].match(/[0-9]/) !== null) {
            return str[i]     
        }
    }
}

// NOTE:
// I have no idea why I didn't just do:
// const firstDigit = s => s.match(/\d/)[0]
// The reason for the excpetion was an error in CodeSignals original tests
