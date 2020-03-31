// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, your task is to find the result which the little boy will get.

const f = (a,b) => {
    let s = ""+(+a + +b)
    return s[s.length-1]
}

const additionWithoutCarrying = (p1,p2) => {
    let n1 = p1<p2?""+p1:""+p2,
        n2 = p1>p2?""+p1:""+p2;
    if (n1.length!==n2.length) {
        n1 = n1.padStart(n2.length, 0)
    }
    return +n1.split('').map((x,i)=>f(x,n2[i])).join('')
}