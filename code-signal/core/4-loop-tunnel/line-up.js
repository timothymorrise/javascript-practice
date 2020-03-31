// To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

const turn = (sameDir, turn) => {
    if(turn==="L" || turn==="R") return sameDir?false:true
    if (turn==="A") return sameDir?true:false
}

const lineUp = s => {
    let c = 0,
        d = true
    for(let i=0;i<s.length;i++) {
        d = turn(d,s[i])
        if (d) c++
    }
    return c
}

// NOTES
// I am actually reasonable confident in this answer