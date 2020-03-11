// In numbers theory, a positive composite integer is a Smith number if its digital root is equal to the digital root of the sum of its prime factors, with factors being counted by multiplicity. Trivially, every prime is also a Smith number, having just one prime factor that is equal to itself. If two Smith numbers are consecutive in the integer series, then they are Smith brothers. Any other number will not be a Smith.

// Given a positive integer number, implement a function that returns:

// "Youngest Smith" if the given number is the lower element of a couple of Smith brothers.
// "Oldest Smith" if the given number is the higher element of a couple of Smith brothers.
// "Single Smith" if the given number is a Smith number without another Smith number adjacent, lower or higher.
// "Trivial Smith" if the given number is a prime.
// "Not a Smith" if the given number is not a Smith number.

const digitalRoot = n => 1 + (n - 1) % 9;

const isPrime = n => {
    for(let i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
}

const primeFactors = n => {
    let primesArray = [],
        divisor = 2
    while(n>2) {
        if (n%divisor == 0) {
            primesArray = [...primesArray, divisor]
            n = n/ divisor;
        }
         else{
           divisor++;
         }
    }
    return primesArray
}

const isSmith = n => {
		if (isPrime(n)) return false
    return digitalRoot(n)===digitalRoot(
        primeFactors(n).reduce((accum, x)=>accum+x)
    )
}

const smithType = n => {
	if (n===1) return "Not a Smith"
	if (isPrime(n)) return "Trivial Smith"
	let isOlderSmith = isSmith(n+1)
	let isYoungerSmith = isSmith(n-1)
	let isNSmith = isSmith(n)
	if (isNSmith && isOlderSmith) return "Youngest Smith"
	if (isNSmith && isYoungerSmith) return "Oldest Smith"
	if (isNSmith) return "Single Smith"
	return "Not a Smith"
}