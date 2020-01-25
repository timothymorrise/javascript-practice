// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

const minesweeper = matrix => {
    return matrix.map((arr, i) => {
        return arr.map((cell, j) => {
            let counter = 0
            if (arr[j+1]) counter++
            if (arr[j-1]) counter++
            if (matrix[i-1]) {
                if (matrix[i-1][j]) counter++
                if (matrix[i-1][j+1]) counter++
                if (matrix[i-1][j-1]) counter++
            }
            if (matrix[i+1]) {
                if (matrix[i+1][j]) counter++
                if (matrix[i+1][j+1]) counter++
                if (matrix[i+1][j-1]) counter++
            }
            return counter
        })
    })
}