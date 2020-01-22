// You are given an array arr that contains 13 arrays; each array is representing a set of five dice to check for the turn combination, accordingly to the order and to the description given in the above table. You have to implement a function that returns an integer being the final score made by the player.

const yahtzeeScoreCalc = a => {
	const callback = (x, i) => {
		switch (i) {
			case 0: case 1: case 2: case 3: case 4: case 5: 
				return x.reduce((acc, y) => (y===i+1) ? acc+y : acc, 0);
				break;
			case 6: case 7:
				let re = i<7 ? new RegExp(/(.)\1{2,}/) : new RegExp(/(.)\1{3,}/)
				return re.test(x.sort().join('')) ? x.reduce((acc,y)=>acc+y) : 0;
				break; 
			case 8:
				return (/(.)\1{1}/.test(x.sort().join('')) && /(.)\1{2}/.test(x.sort().join(''))) ? 25 : 0;
				break;
			case 9: 
				return (/(1234)/.test(x.join('')) || /(2345)/.test(x.join('')) || /(3456)/.test(x.join(''))) ? 30 : 0;
				break;
			case 10:
				return (/(12345)/.test(x.sort().join('')) || /(23456)/.test(x.sort().join('')) ) ? 40 : 0
				break;
			case 11:
				return (/(.)\1{4}/.test(x.join(''))) ? 50 : 0
				break;
			case 12:
				return x.reduce((acc, y)=>acc+y)
				break;			
		}
	}
	let scoreCard = a.map(callback)
	let extraPoints = scoreCard.slice(0, 6).reduce((acc,x)=>acc+x)>=63 ? 35 : 0
	return scoreCard.reduce((acc,x)=>acc+x) + extraPoints
}