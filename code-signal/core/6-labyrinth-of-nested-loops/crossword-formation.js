const sans = (a,n) => a.filter((x,i)=> i!==n)

const getLetterIntersections = (skip, s1, s2) => {
    let a = []
    for (let i=0;i<s1.length;i++) {
        for (let j=0;j<s2.length;j++) {
            if (s1[i]===s2[j] && i!==skip) a.push([s1[i], i, j])
        }
    }
    return a
}

    // compare the chosen word to it's compatriats
    for (let i=0;i<4;i++) { 
        let first = w[i] // define first word     
        let a = sans(w,i) // filter array
        for (let j=0;j<3;j++) {          
            let second = a[j] // define second word          
            let firstInstersections = getLetterIntersections(null,first,second)  // find all intersections between first two words
            // compare the second word word to the third word in the array
            let b = sans(a, j) // filter out second word
            let third = b[0]
            for ( let k=0;k<firstInstersections.length;k++) {          // loop through the intersection array
                let secondIntersections = getLetterIntersections(firstInstersections[k][2],second,third) // get intersections of second and third
                
            }

                // compare now against the fourth word matching the distances between indexes to make sure this work

            // compare again but swap the third and four words from last time
        }
        
       
    }
}

