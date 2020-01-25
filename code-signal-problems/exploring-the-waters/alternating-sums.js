// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

const alternatingSums = (arr) => {
    let output = [0, 0]
    arr.forEach((n, i) => {
        if (i%2 == 0) {
            output[0]+=n
        } else {
            output[1]+=n
        }
    })
    return output
}