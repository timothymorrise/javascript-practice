// Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

function combinations(items) {
	return [].slice.call(arguments).reduce((acc, x) => (x===0)?acc:acc*x)
}