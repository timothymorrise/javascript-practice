// In this challenge, you have to establish if an integer is an Unprimeable number. To be Unprimeable, when a single digit of a composite number is exchanged with any digit from 0 up to 9, the new number obtained must not be a prime:

//Given a non-negative integer num, implement a function that returns:

// The string "Prime Input" if num is prime.
// The string "Unprimeable" if num is Unprimeable (accordingly to the above instructions).
// If num is not Unprimeable, an array containing all the primes obtained after exchanging its digits, without duplicates and sorted ascendingly.

const isPrime = n => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false; 
    return n > 1;
}

const isUnprimeable = n => {
    if (isPrime(n)) return "Prime Input"
    let a = [...""+n], b
    let o = [] // output
    for(let i=0, j;i<a.length;i++) {
        for (j=0; j<10; j++) {
            b = +a.map((x,y)=> y===i? ""+j: x).join('')
            if (isPrime(b)) o.push(b)
        }   
    }  
    return o.length>0?o.sort():"Unprimeable"
}