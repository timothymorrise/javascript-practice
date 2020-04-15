// Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

const s = n => n.toString().split('').reduce((a,c)=>+a + +c, 0)

const isComfortable = (a,b) => {
    return ((a===b)? false: b >= a-s(a) && b <= a+s(a))
}

const areBothComfortable = (a,b) => {
    return isComfortable(a,b) && isComfortable(b,a)
}

const comfortableNumbers = (l, r) => {
    let c = 0
    let a = []

    for (let i=l;i<r;i++) {
        for (let j=i+1;j<=r;j++) {
            if (areBothComfortable(i,j)) {
                c++
                a.push([i,j])
            }
        }
    }
    return c
}

// NOTEs
// this one is really tough but it has some points to make re: complexity
// namely this solution and the structure of the loops keeps from repeating claims or needing
// a Set/hash structure to keep from repeating pairs