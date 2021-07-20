// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
  let carry = 0;
  for(let i = digits.length - 1 ; i >= 0 ; i--){
      digits[i]= digits[i] + carry;
      if(i == digits.length - 1 ){
        digits[i] = digits[i] + 1;
      } 
      if(digits[i] == 10){
        digits[i] = 0;
        carry = 1;
      } else {
        carry = 0;
      }
  }
  if(carry == 1){
      digits.unshift(carry); 
  }
  return digits;
};