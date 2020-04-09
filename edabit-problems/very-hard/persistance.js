// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.

const additivePersistence = n => {
	let c = 0
	n = ""+n
	while (n.length>1) {
		n = ""+n.split('').reduce((acc,x)=>acc + +x, 0);
		c++;
	}
	return c
}

const multiplicativePersistence = n => {
	let c = 0
	n = ""+n
	while (n.length>1) {
		n = ""+n.split('').reduce((acc,x)=>acc * +x, 1);
		c++;
	}
	return c
}