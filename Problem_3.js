// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
    let largestPrime = 1;
    function isPrime(num){
      for(let i = 2 ; i <= Math.floor(Math.sqrt(num)) ; i++){
        if(num % i == 0) return false;
      }
      return true;
    }
    for(var i = 2; i <= number; i++ ){
      if(isPrime(i) && number % i === 0) largestPrime = i;
    }
    return largestPrime;
  }
  
  
largestPrimeFactor(600851475143);