// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

const addBorder = (arr) => {
    let border = "**" + "*".repeat(arr[0].length)
    return [border, ...arr.map(str => `*${str}*`), border]   
}