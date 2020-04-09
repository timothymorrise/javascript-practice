// Write a function that squishes an array from the left or the right.

const left = a => [a[0]+a[1], ...a.slice(2,a.length)]
const right = a => [...a.slice(0,a.length-2), a[a.length-2]+a[a.length-1]]

const squish = (a, d) => {
	if (a.length===0) return a
	const squishStyle = d==="left"?left:right
	let b = [a]
	while (a.length>1) {
		a = squishStyle(a)
		b.push(a)
	}
	return b
}