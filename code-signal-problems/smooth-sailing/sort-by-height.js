// rearrange the array by heigh without affecting the trees

const sortByHeight = (arr) => {
    let refArr = []
    let sortArr = []
    let counter = 0
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === -1) {
            refArr = [...refArr, -1]
        } else {
            refArr = [...refArr, counter]
            sortArr = [...sortArr, arr[i]]
            counter++
        }
    }
    sortArr.sort((a, b) => a-b)
    return refArr.map(n => {
        if (n === -1) return -1
        else {
            return sortArr[n]
        }
    })
}