// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

const numInStr = a => {
	let regex = RegExp(/\d/)
	return a.filter((x) => {
		return regex.test(x)
	})
}