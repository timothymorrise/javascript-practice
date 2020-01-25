// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

function bishopAndPawn(bishop, pawn) {
    bishop = bishop.split('')
    pawn = pawn.split('')
    let key = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    bishop[0] = key[bishop[0]]
    pawn[0] = key[pawn[0]]
    return Math.abs(bishop[0]-pawn[0]) === Math.abs(bishop[1]-pawn[1])
}