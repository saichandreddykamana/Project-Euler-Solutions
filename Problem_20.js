/*
    Problem 20: Factorial digit sum
    n! means n × (n − 1) × ... × 3 × 2 × 1

    For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
    and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

    Find the sum of the digits n!
*/

function sumFactorialDigits(n) {
    let sum = factorial(n);
    return sum.toString().split('').reduce((total, arr_item) => total + parseInt(arr_item), 0);
  }
  
  const factorial = (n) => {
    if(n === 0 || n === 1) return BigInt(1);
    return BigInt(n) * factorial(n - 1);
  }
  console.log(sumFactorialDigits(50));