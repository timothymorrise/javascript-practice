// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

const arrayPacking = a =>  parseInt(a
    .reverse()
    .map(x=>x.toString(2)
        .padStart(8,"0")
    )
    .join('')
    ,2
)

// NOTES
// this was a good review of padding
// sexier solutions:
// function arrayPacking(a) {
//     ret = 0;
//     for(i=0;i<a.length;i++)
//         ret+= a[i] << 8*i;
//     return ret;
// }
// this uses leftshifts