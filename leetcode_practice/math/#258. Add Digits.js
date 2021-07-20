// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {
  while(num >= 10){
      num = (num % 10) + parseInt(num/10)
  }
  return num
};