// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

const getStudentsWithNamesAndTopNotes = a => {
	return a.map(x => {
		let name = x.name
		let topNote = (x.notes.length>0) ? Math.max(...x.notes) : 0
		return {name, topNote}
	})
}

// NOTES
// my solution goes around the bush a bit, could be nicer if you added argument
// of "0", in Math.max. Woops.
