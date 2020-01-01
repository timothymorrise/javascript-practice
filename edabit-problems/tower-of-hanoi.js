//There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game
//I looked up the formula for the minimum moves

const towerHanoi = (n) => Math.pow(2, n)-1