// Given two strings, find the number of common characters between them.

const commonCharacterCount = (s1, s2) => {
    let output = 0
    for (let i=0; i<s1.length; i++) {
        for (let j=0; j<s2.length; j++) {
            if (s1[i] === s2[j]) {
                output ++
                s2 = s2.slice(0,j) + s2.slice(j+1)
                break;
            }
        }
    }
    return output
}