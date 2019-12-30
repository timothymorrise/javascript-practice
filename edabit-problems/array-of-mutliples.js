//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples (n, l) {
	let output = []
	for (let i=0;i<l;i++) {
		output = [...output, (i+1)*n]
	}
	return output
}