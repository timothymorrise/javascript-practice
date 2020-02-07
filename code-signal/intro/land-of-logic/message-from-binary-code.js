// Decode the string of binary numbers

const messageFromBinaryCode = s => {
    return s.match(/.{1,8}/g).map(x=>String.fromCharCode(parseInt(x, 2))).join('')
}