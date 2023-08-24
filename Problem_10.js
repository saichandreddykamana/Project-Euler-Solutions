/*
    Problem 10: Summation of primes
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

    Find the sum of all the primes below n.
*/

function primeSummation(n) {
    let sum = 0;
    for(let i = 2; i < n; i++){
      if(isPrime(i)) sum += i;
    }
    return sum;
}
  
function isPrime(num){
    for(let i = 2 ; i <= Math.floor(Math.sqrt(num));i++){
      if(num % i === 0) return false;
    }
    return true;
}
  
primeSummation(2000000);