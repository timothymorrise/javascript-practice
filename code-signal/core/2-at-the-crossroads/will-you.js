// Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

// A person contradicts Mary's belief if one of the following statements is true:

// they are young and beautiful but not loved;
// they are loved but not young or not beautiful

const willYou = (y, b, l) => (y&&b&&!l)||(l&&(!b||!y))

// sexier solution 
// => (y&&b)!=l
// its important to remember the way logic carries in operators