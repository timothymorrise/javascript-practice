// This is a method commonly taught in primary schools, used to verify the correctness of an operation; usually (as in this exercise) the multiplication.

// Every number involved in the multiplication is replaced by its digital root (reiterated sum of its digits until a single-digit number is obtained). After this, the digital roots of factors are multiplied, and again this result is reduced to the digital root. If the digit obtained is different from the result's digital root the operation is surely wrong, if it is equal the operation can be correct with a possibility out of nine to be a false positive.

// Given two factors and a result, implement a function that returns a string in the format:

// "x, x, x, x = Result!", with x being the digital roots (a, b, r, and a*b in the order).
// Result! being "Correct!" if the last two digits are the same and the result is correct.
// "False Positive!" if the last two digits are the same but the result is wrong.
// "Wrong!" if the last two digits are different.

const castOutNines = (a, b, r) => {
	const rt = n => { // "rt" short for digital "r"oo"t"
			n = ""+n
			while(n.length>1) {
				if (n.length===2) {
					n = +n[0]+ +n[1]
					n = ""+n
				} 
				n = ""+n.split('').map(x=> +x).reduce((acc,x)=>acc+x,0)
		}
		return n
	}
	let p = a*b // "p" for product our "true product" of a and b
	let suffix = (rt(r)===rt(p)&&r===p)?"Correct!":
		(rt(r)===rt(p)&&r!==p)?"False positive!":"Wrong!"
	return `${rt(a)},${rt(b)},${rt(r)},${rt(p)} = ` + suffix
}