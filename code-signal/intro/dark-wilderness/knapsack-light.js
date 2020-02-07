// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if(maxW>=(weight1+weight2)) return value1 + value2;
    else if(maxW>=weight1) {
        if(maxW>=weight2) return Math.max(value1,value2);
        else return value1; }
    else if ((maxW>=weight2)&&(maxW<weight1)) return value2;
    return 0;
}