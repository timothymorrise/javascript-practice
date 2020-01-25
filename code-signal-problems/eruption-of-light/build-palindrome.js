// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

const reverseStr = (s) => {
    let output = ""
    for (i=s.length-1; i>=0; i--) {
        output += s[i]
    }
    return output
}

const buildPalindrome = (str) => {
    if (str === reverseStr(str)) return str
    let stack = ""
    let test = ""
    for (let i=0; i<str.length; i++) {
        stack = str[i] + stack
        test = str+stack
        if (test === reverseStr(test)) return test
    }   
}