// The goal of this challenge is to implement the logic used in Conway's Game of Life. Wikipedia will give a better understanding of what it is and how it works (check the resources tab above).

// Rules
// For a space that's "populated":
// Each cell with 0 or 1 neighbours dies, as if by solitude.
// Each cell with 2 or 3 neighbours survives.
// Each cell with 4 or more neighbours dies, as if by overpopulation.
// For a space that's "empty" or "unpopulated":
// Each cell with 3 neighbours becomes populated.
// Parameters
// board: a 2-dimensional array of values 0 to 1.

// 0 means the cell is empty.
// 1 means the cell is populated.
// Return Value
// A string containing the board's state after the game logic has been applied once.

// https://edabit.com/challenge/CzfwodvnWs5QjzEgv

const example1 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];

// on  character: █
// off character: ░

// on  character: █
// off character: ░

generateNeighbors = (a, x, y, xL, yL) => {
	let output = []
	// row above
	if (y>0) {
		if (x > 0 && x<(xL-1)) output.push(...a[y-1].slice(x-1,x+2))
		else if (x===0) output.push(...a[y-1].slice(x, x+2))
		else if (x===xL-1) output.push(...a[y-1].slice(x-1, x+1))
	}
	// front and back
	if (x>0) output.push(a[y][x-1])
	if (x<(xL-1)) output.push(a[y][x+1])
	// bottom row
	if (y<yL-1) {
		if (x > 0 && x<(xL-1)) output.push(...a[y+1].slice(x-1,x+2))
		else if (x===0) output.push(...a[y+1].slice(x, x+2))
		else if (x===xL-1) output.push(...a[y+1].slice(x-1, x+1))
	}
	return output.filter(x=> x===1)
}

const gameOfLife = a => {
	let s = ""
	for (let i=0;i<a.length;i++) {
		for (let j=0;j<a[i].length; j++) {
			let n = generateNeighbors(a, j, i, a[i].length, a.length).length
			if (a[i][j]===1) {
				console.log(i,j, s===undefined)
				s+= (n === 2 || n === 3)?"█":"░"
			} else if (a[i][j]===0) {
				s+= n===3?"█":"░"
			}
			
		}
		if (i<a.length-1) s+="\n"
	}
	return s
}