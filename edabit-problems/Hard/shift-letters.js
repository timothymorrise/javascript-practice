// Create a function that takes a string and shifts the letters left by an amount n but not the whitespace.

function shiftLetters(s, n) {
	let whitespaces = []
	let output = ""
	a = s.split('').filter((x,i) => {
		if (x===" ") whitespaces.push(i)
		return x!==" "
	})
	console.log(a, whitespaces)
}