// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

const stringsRearrangement = arr => {
    for (let i = 0; i < arr.length; i++) {
      let remaining = findNext(arr[i], arr);
      if (remaining.length === 0) return true;
    }
    return false;
  }  
  
  function findNext(current, arr) {
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
      if (differsByOneChar(current, arr[i])) {
        let remaining = findNext(arr[i], arr.slice(0,i).concat(arr.slice(i+1)));
        if (remaining.length === 0) return remaining;
      }
    }
    return arr;
  }
  
  const differsByOneChar = (str1, str2) => {
      let difference = 0
      for (let h=0; h<str1.length; h++) {
          if (str1[h] !== str2[h]) difference++ 
          if (difference > 1) break;
      }
      return difference === 1
  }