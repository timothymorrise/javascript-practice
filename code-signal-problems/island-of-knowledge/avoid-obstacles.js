// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

const avoidObstacles = arr => {
    let jumpPoints=[]
    let maxObstacle=Math.max(...arr)
    let jump=maxObstacle+1
    for (let i=maxObstacle; i>=2; i--) {
        if (!arr.includes(i)) {
            jumpPoints=[...jumpPoints, i]
        }
    }
    jumpPoints.forEach(n => {
        if (arr.every(m=> m%n!==0)) {
            jump = n
        }
    })
    return jump
}