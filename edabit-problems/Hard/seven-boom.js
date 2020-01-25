//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (arr) => {
	let output = "there is no 7 in the array"
	if (arr.join("").toString().match(/[7]+/g)) {
		output = "Boom!"				
	}
	return output
}