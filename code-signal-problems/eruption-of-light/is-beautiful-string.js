// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

const isBeautifulString = (s) => {  
    let arr = []
    let keyObj = {}
    for (let i=0; i<26; i++) {
      arr.push(0)
      keyObj[String.fromCharCode(i+65).toLowerCase()] = i
    }
    for (i=0; i<s.length; i++) {
      arr[keyObj[s[i]]]++
    }
    for (i=1; i< arr.length;i++) {
      if (arr[i] > arr[i-1]) {
        return false
      }
    }
    return true  
  }