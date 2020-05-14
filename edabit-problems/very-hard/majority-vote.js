// Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

const majorityVote = a => {
	let o = {}
	a.forEach( x => {
		if(!o[x]) o[x]=1
		else o[x]++
	} )
	for (const key in o) {
		if (o[key] > a.length/2) return key
	}
	return null
}