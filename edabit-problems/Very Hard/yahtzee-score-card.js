// You are given an array arr that contains 13 arrays; each array is representing a set of five dice to check for the turn combination, accordingly to the order and to the description given in the above table. You have to implement a function that returns an integer being the final score made by the player.

const yahtzeeScoreCalc = a => {
	const callback = (x, i) => {
		switch (i) {
			case 0: case 1: case 2: case 3: case 4: case 5: 
				return x.reduce((accumulator, y) => (y===i+1) ? accumulator+y : accumulator, 0)
				break;
			case 6: case 7:
				return 
		}
	}
	const output = a.map(callback)
	console.log(output)
	
}