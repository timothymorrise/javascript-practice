// Create a function using currying that will add a car maker name as a property to the carLot object if it doesn't have one. Then have the function add up the number we pass in when we call the curried function.

let carLot = {}

const carMaker = (make)=> { 
	return function(n) {
		carLot[make] = carLot[make]+n || n
	}
}

// NOTES
// a sexier version:
// const carMaker = make =>
//	numCars => carLot[make] = (carLot[make] || 0) + numCars;