// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

const seatsInTheater = (nCols, nRows, c, r) => (nCols-c+1)*(nRows-r)