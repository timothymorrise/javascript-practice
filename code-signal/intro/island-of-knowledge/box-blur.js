// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

const boxBlur = arr => {
    output = []
    for (let i=0; i<arr.length-2; i++) {
        let subOutput = []
        for (let j=0; j<arr[i].length-2; j++) {
            let average = Math.floor((arr[i][j] + arr[i][j+1] + arr[i][j+2] 
                           + arr[i+1][j] + arr[i+1][j+1] + arr[i+1][j+2] 
                           + arr [i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])/9)
            subOutput = [...subOutput, average]
        }
        output = [...output, subOutput]    
    }   
    return output
}