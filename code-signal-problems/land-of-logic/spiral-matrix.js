// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

const spiralNumbers = n => {
    let a = new Array(n).fill().map(() => new Array().fill(''))
    let direction = "right",
        lengthOffSet = 0,
        horizontalIndex = 0,
        verticalIndex = 0
    for (let i=1;i<((n*n)+1);i++) {
        if (direction==="right") {
            a[verticalIndex][horizontalIndex]=i
            horizontalIndex++
            if(horizontalIndex===n-1-lengthOffSet) direction="down"
        } else if (direction==="down") {
            a[verticalIndex][horizontalIndex]=i
            verticalIndex++
            if(verticalIndex===n-1-lengthOffSet) direction="left" 
        } else if (direction==="left") {
            a[verticalIndex][horizontalIndex]=i
            horizontalIndex--
            if(horizontalIndex===0+lengthOffSet) direction="up"   
        } else if (direction==="up") {
            a[verticalIndex][horizontalIndex]=i
            verticalIndex--
            if(verticalIndex===0+lengthOffSet) {
                verticalIndex++
                horizontalIndex++
                lengthOffSet++
                direction="right"
            }
            
        }
    }
    return a
}

// NOTES: 
// Global objects are tricky creatures