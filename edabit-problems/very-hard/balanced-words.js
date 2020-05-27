// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.

const balanced = s => {
    let a = (s.length&1)? 
          [s.slice(0, s.length/2-.5), s.slice(s.length/2+.5,s.length)]
          :
          [s.slice(0, s.length/2), s.slice(s.length/2, s.length)]
    a = a.map(x=> x.split('')
                          .map(x=> x.charCodeAt(0) - 96)
                          .reduce((acc,x)=>acc+x)
                       )
      return a[0]===a[1]
}