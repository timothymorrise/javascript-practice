// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

const sumDigProd = (...a) => {
	n = ""+a.reduce((acc, x)=> acc+x)
	while (n.length>1) {
		n = ""+n.split('').reduce((acc,x)=>acc * +x, 1);
	}
	return +n
}