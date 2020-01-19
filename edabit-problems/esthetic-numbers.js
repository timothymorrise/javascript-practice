// Given a positive integer num, implement a function that returns an array containing the bases (as integers from 2 up to 10) in which num results to be Esthetic, or a string "Anti-Esthetic" if no base makes num Esthetic.

const esthetic = n => {
	let output = []
	for (let i=2; i<11; i++ ) {
		//create array of paired digits of n in basei
		let a = n.toString(i).split('').map((x, i, arr) => [x, arr[i+1]])
		a.pop()
		//check if each pairs abs difference is 1 and add i to output
		if (a.every(x=> Math.abs(x[0]-x[1])===1)) {
				output.push(i)
		}	
	}
	return output.length>0 ? output : "Anti-Esthetic"
}