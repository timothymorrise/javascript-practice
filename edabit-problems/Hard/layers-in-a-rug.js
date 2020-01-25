// Write a function that counts how many concentric layers a rug.

const countLayers = rug => {
	// isolate mid layer
	let midIndex = Math.floor(rug.length/2)
	let midLayer = rug[midIndex]
	// isolate half of layer index
	let halfMidLayer = midLayer.substr(0, Math.ceil(midLayer.length/2))
	// count the number of times the characters change use a reduce method
	const reducer = (accumulator, currentValue, index, arr) => {
		return (currentValue!==arr[index-1]) ? accumulator+1 : accumulator;
	} 
	return halfMidLayer.split('').reduce(reducer, 0)
}

// NOTES
// a more elegant solution: "const countLayers = rug => new Set(rug).size;"
// remember the Set object to help with distinct entities
