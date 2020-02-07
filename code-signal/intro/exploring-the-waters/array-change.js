// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input

const arrayChange = (a) => {
    let moves = 0
    for (let i=1; i<a.length; i++) {
        if (a[i-1] >= a[i]) {
            a[i]++
            moves++
            i--
        }
    }
    return moves
}