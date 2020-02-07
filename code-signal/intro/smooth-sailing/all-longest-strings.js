// Given an array of strings, return another array containing all of its longest strings.

const allLongestStrings = (arr) => {
    let maxLength = arr.reduce((counter, string) => {
        return (string.length > counter) ? string.length : counter
    }, 0)
    return arr.filter((string) => string.length === maxLength)
}