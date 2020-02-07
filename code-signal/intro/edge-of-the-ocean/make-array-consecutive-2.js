// Find missing numbers to make the array consecutive increasing integers.

const makeArrayConsecutive2 = (arr) => {
    let counter = 0
    arr.sort((a, b) => (a - b))
    for (let i = 0; i < arr.length-1; i++) {
        let difference = arr[i+1] - arr[i]
        difference > 1 ? counter += (difference - 1) : null
    }
    return counter
}
