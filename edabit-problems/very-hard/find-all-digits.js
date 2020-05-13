// Taking each number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

const findAllDigits = a => {
	let d = [] // digits
	for (let i=0;i<a.length;i++) {
		a[i] = ""+a[i]
		for (let j=0;j<4;j++) {	
			if (!d.includes(a[i][j])) d.push(a[i][j])
			if (d.length===10) return +a[i]
		}
	}
	return "Missing digits!"
}