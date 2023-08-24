// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    let start = Math.pow(10, n - 1);
    let end = Math.pow(10, n) - 1;
    let largest = 0;
    for(let i = end; i >= start; i--){
      for(let j= end; j >= start; j--){
        if(isPalindrome(i*j) && largest < i*j){
          largest = i * j;
          break;
        }
      }
    }
    return largest;
  }
  
  function isPalindrome(num){
    return num.toString() === num.toString().split('').reverse().join('');
  }
  
  largestPalindromeProduct(3);