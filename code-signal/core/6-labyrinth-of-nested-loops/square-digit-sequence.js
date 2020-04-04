//Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

// Given the first element a0, find the length of the sequence.

const squareDigitsSequence = n => {
    let a=[]
    while(!a.includes(n)) {
        a.push(n)
        n=[...""+n].reduce((acc, x)=>acc+Math.pow(x,2),0)
    }
    return a.length+1
}
