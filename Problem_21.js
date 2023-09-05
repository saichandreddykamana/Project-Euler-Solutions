/*
    Problem 21: Amicable numbers
    Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

    If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

    For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

    Evaluate the sum of all the amicable numbers under n.
*/

function sumAmicableNum(n) {
    let a, b, count = 0;
    while(n > 0){
      a = sumOfDivisors(n);
      b = sumOfDivisors(a);
      if(a !== b && b == n) count += a;
      n--;
    }
    return count;
  }
  
  const sumOfDivisors = (n) => {
    let divisors = [];
    for(let i = 1 ; i <= n/2; i++){
      if(n%i === 0) divisors.push(i);
    }
    return divisors.reduce((total, arr_item) => total + arr_item, 0)
  }
  
  console.log(sumAmicableNum(1000));