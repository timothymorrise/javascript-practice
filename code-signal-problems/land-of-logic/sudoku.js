// Create a function that checks a 9x9 Matrix to see if it is a valid Sudoku puzzle

const sudoku = m => { // "m" for matrix
    const validate = arr => {
        let a = [...arr].sort()
        for(let i=0;i<9;i++) {  
            if (a[i]!==i+1) return false       
        }
        return true
    }
    // CHECK ROWS & COLUMNS
    for (let i=0;i<9;i++) {
        let column = m.map(x=>x[i])
        if (!validate(m[i]) || !validate(column)) return false
    }
    // CHECK SUB-GRIDS
    for (i=0;i<9;i+=3) {
        for(let j=0;j<9;j+=3) {
            let subGrid = [m[i][j], m[i][j+1], m[i][j+2], 
                           m[i+1][j],m[i+1][j+1], m[i+1][j+2], 
                           m[i+2][j], m[i+2][j+1], m[i+2][j+2]]
            if (!validate(subGrid)) return false
        }
    }
    return true
}