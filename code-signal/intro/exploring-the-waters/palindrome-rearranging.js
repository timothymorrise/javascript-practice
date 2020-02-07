// Given a string, find out if its characters can be rearranged to form a palindrome.

const palindromeRearranging = (str) => {
    let characters = {}, char
    for(let i=0; i<str.length; i++) {
       char = str[i]
       characters[char] = characters[char]||0
       characters[char]++
    }
    
    let sum = 0
    for (let x in characters) {
       sum += characters[x]%2
    }
    return sum < 2
 }
 

// NOTES:
// simple and sexy:
// const palindromeRearranging = s => s.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 