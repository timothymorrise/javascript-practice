// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (str) => {
	return function () {
		return str
	}
}

// NOTES
// This helps brush up on the fundementals of closures and lexical environments
// also helps with understand the scope of local variables