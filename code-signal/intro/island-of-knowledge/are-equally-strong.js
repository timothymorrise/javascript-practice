// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    let arr = [...[yourLeft, yourRight].sort(), ...[friendsLeft, friendsRight].sort()]
    return (arr[0] === arr [2] && arr[1] === arr[3])
}