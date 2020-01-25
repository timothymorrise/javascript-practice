// Given a valid email address, find its domain part.

const findEmailDomain = (str) => {   
    let arr = str.split("@")
    return arr[arr.length-1]
  }