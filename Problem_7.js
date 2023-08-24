// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
    let prime = 2, count = 1, tempPrime = 2;
    while(count <= n){
      if(isPrime(tempPrime)){
        count++;
        prime = tempPrime;
      }
      tempPrime++;
    }
    return prime;
}
  
function isPrime(num){
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) return false;
    }
    return true;
}
  
nthPrime(10);