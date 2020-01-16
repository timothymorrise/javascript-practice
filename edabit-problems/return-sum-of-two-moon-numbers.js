// When two numbers are added together, the strange Lunar arithmetic is used on the Moon. The Lunar sum of two numbers is not determined by the sum of their individual digits, but by the highest digit of the two taken into account at each step, in columnar form.

const lunarSum = (n1, n2) => {
	let arr1 = (""+n1).split("")
	let arr2 = (""+n2).split("")
	let lesserArr = arr1.length>arr2.length ? arr2 : arr1
	lesserArr.unshift(..."0".repeat(Math.abs(arr1.length-arr2.length)).split(''))
	return 1*arr1.map((x, i) => Math.max(x, arr2[i])).join('') 
}