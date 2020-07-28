// https://edabit.com/challenge/jfpfpH6w42tZeRo2T
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

const trackRobot = (...steps) => {
	let position = [0,0]
	let direction = "north"
	steps.forEach(x=> {
		switch (direction) {
			case "north":
				position[1]+=x
				direction = "east"
				break;
			case "east":
				position[0]+=x
				direction = "south"
				break;
			case "south":
				position[1]-=x
				direction = "west"
				break;
			case "west":
				position[0]-=x
				direction = "north"
				break;
			default:
				break;
		}
	})
	return position
}