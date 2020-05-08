const sans = (a,n) => a.filter((x,i)=> i!==n)

const getLetterIntersections = (s1, s2) => {
    let a = []
    for (let i=0;i<s1.length;i++) {
        for (let j=0;j<s2.length;j++) {
            if (s1[i]===s2[j]) a.push([s1[i], i, j])
        }
    }
    return a
}

const crosswordFormation = w => { //words=>
    // compare each word to each other word
    for (let i=0;i<4;i++) {
        let a = sans(w,i)
        for (let j=0;j<3;j++) {
            console.log(getLetterIntersections(w[i],a[j]))
        }
        // compare a word to another word
        
        // if there is a letter match, begin comparing a different word to that word for a match letter
        // finally check the last word, 
    }
}

