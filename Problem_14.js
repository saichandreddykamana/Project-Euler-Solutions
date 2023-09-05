/*
Problem 14: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
13 -> 3*13 + 1 -> 40/2 -> 20/2 -> 10/2 -> 3*5 + 1 -> 16/2 -> 8/2 -> 4/2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet 
(Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.
*/

function longestCollatzSequence(limit) {
    let num = 1, steps = 1, result = 1, prevNums = {};
    prevNums[num] = steps;
    while(num <= limit){
      let collatzResult = collatz(num, 1, prevNums);
      if(!prevNums.hasOwnProperty(num)) prevNums[num] = collatzResult;
      if(collatzResult > steps){
        steps = collatzResult;
        result = num;
      }
      num++;
    }
    return result;
}
  
function collatz(num, steps, prevNums){
    if(prevNums.hasOwnProperty(num)) {
      return steps + prevNums[num]-1;
    }
    if(num <= 1){
      return steps;
    }else{
      if(num % 2 === 0){
        return collatz(num/2, steps + 1, prevNums);
      }
      if(num % 2 !== 0){
        return collatz(3*num + 1, steps + 1, prevNums);
      }
    }
}
  
console.log(longestCollatzSequence(14));