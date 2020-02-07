// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

const variableName = str => {
    if (str.length===1) return str.match(/^[a-zA-Z_]/)?true:false
    return str.match(/^[a-zA-Z_][A-Za-z0-9_]+$/) ? true : false 
}