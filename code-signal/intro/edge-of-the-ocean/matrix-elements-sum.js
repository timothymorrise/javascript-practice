// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that don't appear below a 0.

const matrixElementsSum = (matrix) => {
    let sum = 0
    if (matrix.length > 1) for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
            if (matrix[i][j] === 0) {
                matrix[i+1][j] = 0
            }
        }
    }
    for (let k = 0; k < matrix[matrix.length-1].length; k++) {
        sum += matrix[matrix.length-1][k]
    }
    return sum
}
