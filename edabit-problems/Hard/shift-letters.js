// Create a function that takes a string and shifts the letters left by an amount n but not the whitespace.

const shiftLetters = (s, n) => {
	let spaces = []
	a = s.split('').filter((x,i) => {
		if (x===" ") spaces.push(i)
		return x!==" "
	})
	for (let i=0;i<n;i++) a.unshift(a.pop())
	for (i=0;i<spaces.length;i++) a = [...a.slice(0,spaces[i]), " ", ...a.slice(spaces[i],a.length)]
	return a.join("")
}

// NOTES
// Elegance - didnt need to filter the array, couldn't used .replace
// method to get the spaces out and then spread the string.