// Write a function that returns the total number of non-nested items in a nested array.

const getLength = (a) => {
    const reducer = (accumulator, currentValue) => {
       if(Array.isArray(currentValue)) {
           return accumulator + getLength(currentValue)
       } else {
           return accumulator+1
       }
    }
    return a.reduce(reducer, 0) 
}