// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

// Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.

const tennisSet = (s1, s2) => {
    [s1, s2] = [s1, s2].sort((a,b)=>a-b)
    if(s1===s2) return false
    if(s2===6 && s1!==5) return true 
    if(s2===7 && (s1===5||s1===6)) return true
    return false
}