// Write a function which increments a string to create a new string.

// If the string ends with a number, the number should be incremented by 1.
// If the string doesn't end with a number, 1 should be added to the new string.
// If the number has leading zeros, the amount of digits should be considered.

const incrementString = (str) => {
	let patt = RegExp(/\d+/)
	let arr = patt.exec(str)
	if (arr===null) return str+"1"
	let numLength = arr[0].length
	let num = (+arr[0])+1
	if (num.toString().length!==numLength) {
		num = "0".repeat(numLength-num.toString().length)+num
	}
	return str.substr(0, str.length-numLength)+num 
}

// The more elegant solution:
// const incrementString = str =>
//   str.replace(/\d*$/, match =>
//     String(Number(match) + 1).padStart(match.length, '0'),
//   );
// 
// NOTES:
// padStart:n The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length