// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

const rangeCheck = (n) => (n >=1 && n<=8)?true:false

const chessKnight = (cell) => {
    let cellKey = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }
    let c = [cellKey[cell[0]], Number(cell[1])]
    let arr = [[-1,-2], 
                     [-2,-1], 
                     [-1,2],
                     [-2,1],
                     [1,-2],
                     [2,-1],
                     [1,2],
                     [2,1]]
    arr.forEach((n, i)=> {
        arr[i] = [n[0]+c[0], n[1]+c[1]]
    })
    let output = 0
    for (let i=0;i<arr.length;i++) {
        if(rangeCheck(arr[i][0]) && rangeCheck(arr[i][1])) {
            output++
        }
    } 
    return output
}