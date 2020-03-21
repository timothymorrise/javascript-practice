// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

const knapsackLight = (v1, w1, v2, w2, maxW) => {
    if (w1+w2 <= maxW) return v1+v2
    if (w1>maxW && w2>maxW) return 0
    if (w1>maxW || w2>maxW) return (w1>maxW) ? v2 : v1
    return (v1>v2)?v1:v2
}
