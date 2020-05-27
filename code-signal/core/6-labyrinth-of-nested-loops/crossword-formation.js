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


const crosswordFormation = (w) => {
    let count = 0
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
                let secondIntersections = getLetterIntersections(firstInstersections[k][2],second,third).filter(x=> {
                    return (x[1]-firstInstersections[k][2])>1
                }) // get intersections of second and third while filtering out undesirable permutations
                for (let l=0;l<secondIntersections.length;l++) {
                    let fourth = b[1];
                    let thirdIntersections = getLetterIntersections(secondIntersections[l][2], third, fourth).filter(x=> {
                        return x[1]-secondIntersections[l][2]>1
                    }) // get intersections of third and fourth while filtering out undesirable permutations
                    for (let m=0;m<thirdIntersections.length;m++) {
                            console.log(firstInstersections[k],secondIntersections[l], thirdIntersections[m],
                        first, second, third, fourth)
                            console.log(secondIntersections[l][1], firstInstersections[k][2])
                            let differenceX = secondIntersections[l][1]-firstInstersections[k][2]
                            let differenceY = thirdIntersections[m][1]-secondIntersections[l][2]
                            if(first[firstInstersections[k][1]+differenceY]
                                ===
                                third[thirdIntersections[m][1]-differenceX]
                                ){
                            console.log("we got one")
                            count++
                            }
                    }
                }
            }

                // compare now against the fourth word matching the distances between indexes to make sure this work

            // compare again but swap the third and four words from last time
        }
        
       
    }
    return count
}