// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

const extraNumber = (a, b, c) => (a===b)? c : (b===c)? a : b