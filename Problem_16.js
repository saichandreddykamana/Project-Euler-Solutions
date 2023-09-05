/*
    Problem 16: Power digit sum
    215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

    What is the sum of the digits of the number 2exponent?
*/

function powerDigitSum(exponent) {
    return parseInt(BigInt(Math.pow(2, exponent)).toString().split('').reduce((total, arr_item) => total + parseInt(arr_item), 0));
}
  
console.log(powerDigitSum(128));