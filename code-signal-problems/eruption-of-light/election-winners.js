// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

const electionsWinners = (v, k) => {
    const max = Math.max(...v)
    let maxCount = 0
    if (k===0) {
        for (let i=0;i<v.length;i++) {
            if (v[i]===max)maxCount++
        }
        return maxCount===1? 1:0
    }
    let count = 0
    for (i=0;i<v.length;i++) {
        if (max < v[i]+k) count ++
    }
    return count
}
