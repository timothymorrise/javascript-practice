// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

const almostIncreasingSequence = (arr) => {
    let arrCopy = [...arr]
    
    for( let i = 0; i < arr.length-1; i++) {
        if (arr[i] >= arr[i+1]) {
            arr.splice(i, 1);
            break;
        } 
    } 
    
    for (let i = arrCopy.length - 1; i > 0; i--) {
        if (arrCopy[i-1] >= arrCopy[i]) {
            arrCopy.splice(i, 1);
            break;
        }
    }
    

    return arr.every((n, i, array) => i < array.length - 1 ? n < array[i+1] : true)
        || 
        arrCopy.every((n, i, array) => i < array.length - 1 ? n < array[i+1] : true)
}