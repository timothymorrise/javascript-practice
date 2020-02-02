// This is a method commonly taught in primary schools, used to verify the correctness of an operation; usually (as in this exercise) the multiplication.

// Every number involved in the multiplication is replaced by its digital root (reiterated sum of its digits until a single-digit number is obtained). After this, the digital roots of factors are multiplied, and again this result is reduced to the digital root. If the digit obtained is different from the result's digital root the operation is surely wrong, if it is equal the operation can be correct with a possibility out of nine to be a false positive.

// Given two factors and a result, implement a function that returns a string in the format:

// "x, x, x, x = Result!", with x being the digital roots (a, b, r, and a*b in the order).
// Result! being "Correct!" if the last two digits are the same and the result is correct.
// "False Positive!" if the last two digits are the same but the result is wrong.
// "Wrong!" if the last two digits are different.

const castOutNines = (a, b, r) => {
	const root = n => {
		return n && n % 10 + root(Math.floor(n / 10));
	}
	console.log(root(a))
	let p = root(root(a)*root(b)) // "p" for product
	let endStr = (p===root(r)&&(a*b)===r) ? "Correct!" : 
		(p===root(r)&&(a*b)!==r) ? "False positive!" : "Wrong!"
	return `${root(a)},${root(b)},${root(r)},${root(p)} = ${endStr}`
}