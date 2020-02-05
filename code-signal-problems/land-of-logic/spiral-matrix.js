// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

const spiralNumbers = n => {
    let a = new Array(n).fill().map(() => new Array().fill(''))
    let direction = "right",
        lengthOffSet = 0,
        x = 0,
        y = 0
    for (let i=1;i<((n*n)+1);i++) {
        if (direction==="right") {
            a[y][x]=i
            x++
            if(x===n-1-lengthOffSet) direction="down"
        } else if (direction==="down") {
            a[y][x]=i
            y++
            if(y===n-1-lengthOffSet) direction="left" 
        } else if (direction==="left") {
            a[y][x]=i
            x--
            if(x===0+lengthOffSet) direction="up"   
        } else if (direction==="up") {
            a[y][x]=i
            y--
            if(y===0+lengthOffSet) {
                y++
                x++
                lengthOffSet++
                direction="right"
            }
            
        }
    }
    return a
}

// NOTES: 
// Global objects are tricky creatures