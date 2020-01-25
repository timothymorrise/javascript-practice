// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

const differentSquares = m => {
    let a = []
    for (let i=0;i<m.length-1;i++) {
        for (let j=0;j<m[i].length-1;j++) {
            if (!a.includes(""+m[i][j]+m[i][j+1]+m[i+1][j]+m[i+1][j+1]) ) {
                a = [...a, ""+m[i][j]+m[i][j+1]+m[i+1][j]+m[i+1][j+1]]
            }
        }
    }
    return a.length
}

// NOTES:
// probably could have been more elegant with a Set