// Given two cells on the standard chess board, determine whether they have the same color or not.

const cellColor = cell => {
    let key = ["A", "C", "E", "G"] //Rows where odd numbers are black
    if (key.includes(cell[0])) {
        return Number(cell[1])%2===1 ? "black" : "white"
    } else {
        return Number(cell[1])%2===0 ? "black" : "white"
    }
}

const chessBoardCellColor = (cell1, cell2) => {
    return cellColor(cell1)===cellColor(cell2)
}